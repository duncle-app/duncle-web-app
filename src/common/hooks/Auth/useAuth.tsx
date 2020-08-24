import React, {Dispatch, SetStateAction, useCallback} from 'react'
import UserDAO from "../../../model/userDAO";
import userDAO from "../../../model/userDAO";
import {useUserPouch} from "../UsePouch";
import { isEqual } from 'lodash';

export type useAuthReturn = {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
    getAuthenticatedUser: string | Error,
}

interface localStorageItem {
    value: UserDAO
    expiry: number
}

// tutorial on setting local storage tokens with expiry dates
// https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/
export default function useAuth() {
    const TOKEN_ID: string = 'authCredentials';
    const {fetchUser} = useUserPouch()

    function isValidToken(): boolean {
        return typeof getWithExpiry(TOKEN_ID) !== 'undefined' && getWithExpiry(TOKEN_ID) !== null;
    }

    function setUserToken(user: UserDAO) {
        const now = new Date()
        const oneMinute = 60000
        const oneHour = oneMinute * 60
        const twoHours = oneHour * 2

        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item: localStorageItem = {
            // set user info, along with token
            value: user,
            expiry: now.getTime() + twoHours
        }
        console.log("adding to local storage:", item)
        localStorage.setItem(TOKEN_ID, JSON.stringify(item))
    }

    return {
        isAuthenticated: useCallback((): boolean => {
            return isValidToken();
        }, []),
        getAuthenticatedUser: useCallback(async (): Promise<UserDAO | Error> => {
            const token = getWithExpiry(TOKEN_ID)
            console.log("current user, context", token)
            if (token === null) {
                throw new Error(`There is currently no user set. Token value: ${token}`)
            }
            // todo - get the id, and make a request to the database to get the most updated information.
            const userFromDatabase : userDAO = await fetchUser(token.email)
            if (isEqual(userFromDatabase, token)) {
                return token
            } else {
                setUserToken(userFromDatabase)
                return userFromDatabase
            }

            // todo - just UPDATE the value object on the localstorage object authCredentials
            // todo - check if there's a mismatch, to avoid making an extra request.

        }, []),
        authenticate: useCallback((user: UserDAO) => {
            setUserToken(user);
        }, []),
        signout: useCallback(
            () =>
                localStorage.removeItem(TOKEN_ID), []
        )
    }
}

// @ts-ignore
function getWithExpiry(key) : UserDAO | null {
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    if (!itemStr) {
        console.log("returning null")
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        console.log("removing key")
        localStorage.removeItem(key)
        return null
    }
    console.log("returning key", item.value)
    return item.value
}