import React, {Context, useCallback, useState} from "react";
import useAuth, {useAuthReturn} from "./hooks/useAuth";

type ContextProps = {
    useAuth(): useAuthReturn,
    lang: string,
    theme: string
}

export const initialValues: ContextProps = {
    useAuth,
    lang: 'en',
    theme: 'dark'
}

export const GlobalContext: Context<any> = React.createContext(initialValues);