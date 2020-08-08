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
    const {isAuthenticated, authenticate} = useAuth()
    const [currentLibrary, setCurrentLibrary] = useState<Library>(NoLibrary)
    // todo - pick one libraryManager impl or the other
    return (
        <GlobalContext.Provider value={{
            lang: 'en',
            theme: 'dark',
            isAuthenticated,
            authenticate,
            currentLibrary,
            setCurrentLibrary
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

// @ts-ignore
export const GlobalContext: Context<any> = React.createContext({});
