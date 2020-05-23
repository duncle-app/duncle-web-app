import React, {Context} from "react";

type ContextProps = {
    authenticated: boolean,
    lang: string,
    theme: string
}

export const initialValues: ContextProps = {
    authenticated: true,
    lang: 'en',
    theme: 'dark'
}

export const GlobalContext: Context<any> = React.createContext(initialValues);