import React, {Context, useCallback, useState} from "react";
import useAuth, {useAuthReturn} from "./hooks/useAuth";

type ContextProps = {
    isAuthenticated: boolean,
    authenticate(): void,
    useAuth(): useAuthReturn,
    lang: string,
    theme: string
}

// @ts-ignore
export function GlobalProvider({children}) {
    const {isAuthenticated, authenticate} = useAuth()
    return (
        <GlobalContext.Provider value={{lang: 'en', theme: 'dark', isAuthenticated, authenticate}}>
            {children}
        </GlobalContext.Provider>
    )
}

// @ts-ignore
export const GlobalContext: Context<any> = React.createContext({});
