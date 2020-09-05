import React, {Context, useState} from "react";
import useAuth, {useAuthReturn} from "./hooks/Auth/useAuth";
import Library from "../model/library";
import {NoLibrary} from "../components/storybook-mocks/constants";
import {Color as Severity} from "@material-ui/lab";

type ContextProps = {
    isAuthenticated: boolean,
    authenticate(): void,
    useAuth(): useAuthReturn,
    lang: string,
    theme: string,
}

// @ts-ignore
export function GlobalProvider({children}) {
    const {isAuthenticated, authenticate, getAuthenticatedUser} = useAuth()
    const [currentLibrary, setCurrentLibrary] = useState<Library>(NoLibrary)
    const [message, setMessage] = useState<String>('')

    return (
        <GlobalContext.Provider value={{
            lang: 'en',
            theme: 'dark',
            isAuthenticated,
            authenticate,
            getAuthenticatedUser,
            currentLibrary,
            setCurrentLibrary,
            doggie,
            setdoggie
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

// @ts-ignore
export const GlobalContext: Context<any> = React.createContext({});
