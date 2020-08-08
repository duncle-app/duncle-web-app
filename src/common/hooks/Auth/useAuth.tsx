import React, {Dispatch, SetStateAction, useCallback, useState} from 'react'

export type useAuthReturn = {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
}

var authCredentials = {
    token: "fasdjklfjasdklfjalksdfjlkasdfjkl"
}

export default function useAuth() {
    // tutorial on setting local storage tokens with expiry dates
    // https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/
    return {
        isAuthenticated: useCallback((user) : boolean => {
            console.log("user passed in", user)
            return typeof getWithExpiry('authCredentials') !== 'undefined' && getWithExpiry('authCredentials') !== null
            // return key === user.id
        },[]),
        authenticate: useCallback(() => {
            const now = new Date()
            const fiveSeconds = 5000

            // `item` is an object which contains the original value
            // as well as the time when it's supposed to expire
            const item = {
                // set user info, along with token
                value: 'value101',
                expiry: now.getTime() + fiveSeconds
            }
            localStorage.setItem('authCredentials', JSON.stringify(item))
        }, []),
        signout: useCallback(
            () =>
                localStorage.removeItem('authCredentials'), []
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