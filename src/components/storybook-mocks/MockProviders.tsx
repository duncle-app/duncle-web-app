import { mockToken } from "./constants";
import React, { PropsWithChildren } from "react";
// @ts-ignore
import { LocalStorageMock } from "@react-mock/localstorage";

export const LocalStorageMockProvider = ({
  children,
}: PropsWithChildren<any>) => (
  <LocalStorageMock items={{ authCredentials: mockToken }}>
    {children}
  </LocalStorageMock>
);
