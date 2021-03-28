import React, { Context, useState } from "react";
import useAuth, { useAuthReturn } from "./hooks/Auth/useAuth";
import Library from "../model/library";
import { NoLibrary } from "../components/storybook-mocks/constants";
import { Color as Severity } from "@material-ui/lab";

interface ContextProps {
  lang: string;
  theme: string;
}

export interface SnackbarStateProps {
  message: string;
  severity: Severity;
}

export let initialState: SnackbarStateProps = {
  message: "",
  severity: "success",
};

// @ts-ignore
export function GlobalProvider({ children }) {
  const [currentLibrary, setCurrentLibrary] = useState<Library>(NoLibrary);
  const [message, setMessage] = useState<SnackbarStateProps>(initialState);

  return (
    <GlobalContext.Provider
      value={{
        currentLibrary,
        setCurrentLibrary,
        message,
        setMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// @ts-ignore
export const GlobalContext: Context<any> = React.createContext({});
