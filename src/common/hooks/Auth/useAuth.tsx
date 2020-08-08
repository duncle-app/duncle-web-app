import React, {Dispatch, SetStateAction, useCallback, useState} from 'react'
import UserDAO from "../../../model/userDAO";

export type useAuthReturn = {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
}

var authCredentials = {
    token: "fasdjklfjasdklfjalksdfjlkasdfjkl"
}

interface localStorageItem {
    value: UserDAO
    expiry: number
}

// tutorial on setting local storage tokens with expiry dates
// https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/
export default function useAuth() {
    const TOKEN_ID: string = 'authCredentials';
    return {
        isAuthenticated: useCallback(() : boolean => {
            console.log("Checking if is authenticated")
            // todo - set the global user if we're authenticated. If not, clear it.
            return typeof getWithExpiry(TOKEN_ID) !== 'undefined' && getWithExpiry(TOKEN_ID) !== null
            // return key === user.id
        },[]),
        authenticate: useCallback((user: UserDAO) => {
            console.log("authenticating")
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
            localStorage.setItem(TOKEN_ID, JSON.stringify(item))
        }, []),
        signout: useCallback(
            () =>
                localStorage.removeItem(TOKEN_ID), []
        )
    }
}

// @ts-ignore
function getWithExpiry(key) {
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
    console.log("returning key")
    return item.value
}