import React, {Context, useState} from "react";
import useAuth, {useAuthReturn} from "./hooks/Auth/useAuth";
import Library from "../model/library";
import {NoLibrary} from "../components/storybook-mocks/constants";

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
            message,
            setMessage
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

// @ts-ignore
export const GlobalContext: Context<any> = React.createContext({});
