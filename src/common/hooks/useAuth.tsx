import React, {Dispatch, SetStateAction, useCallback, useState} from 'react'

export type useAuthReturn = {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
}

export default function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return {
        isAuthenticated,
        setIsAuthenticated,
        // authenticate: () => {
        //     console.log("in use auth before", isAuthenticated)
        //     setIsAuthenticated(true)
        //     console.log("in use auth after", isAuthenticated)
        // },
        // signout: useCallback(
        //     () =>
        //         setIsAuthenticated(false), []
        // )
    }
}
