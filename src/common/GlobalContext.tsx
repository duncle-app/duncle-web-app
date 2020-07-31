import React, {Context, useCallback, useState} from "react";
import useAuth, {useAuthReturn} from "./hooks/useAuth";
import {LibraryManager} from "./library-manager";
import {AppState} from "./app-state";
import {DummyLibraryService} from "./dummy-library-service";
import Library from "../model/library";
import {NoLibrary} from "../components/storybook-mocks/constants";

type ContextProps = {
    isAuthenticated: boolean,
    authenticate(): void,
    useAuth(): useAuthReturn,
    lang: string,
    theme: string,
    libraryManager: LibraryManager;
}

// @ts-ignore
export function GlobalProvider({children}) {
    const {isAuthenticated, authenticate} = useAuth()
    const [currentLibrary, setCurrentLibrary] = useState<Library>(NoLibrary)
    // todo - pick one libraryManager impl or the other
    const appState: AppState = new AppState();
    const libraryService: DummyLibraryService = new DummyLibraryService();
    const libraryManager2: LibraryManager = new LibraryManager(
        libraryService,
        appState
    );
    return (
        <GlobalContext.Provider value={{
            lang: 'en',
            theme: 'dark',
            isAuthenticated,
            authenticate,
            libraryManager2,
            currentLibrary,
            setCurrentLibrary
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

// @ts-ignore
export const GlobalContext: Context<any> = React.createContext({});
