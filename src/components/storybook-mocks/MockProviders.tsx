import React, { Context } from "react";
import { HasChildrenProps } from "../../duncleTypes";

export default function ({ children }: HasChildrenProps) {
  return (
    <MockContext.Provider
      value={{
        authenticate: () => console.log("mock authenticated"),
      }}
    >
      {children}
    </MockContext.Provider>
  );
}

// @ts-ignore
export const MockContext: Context = React.createContext({});
