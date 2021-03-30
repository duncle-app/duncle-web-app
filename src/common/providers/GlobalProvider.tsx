import React, { PropsWithChildren } from "react";
import { LibraryProvider } from "./LibraryProvider";
import { NotificationProvider } from "./NotificationProvider";
import { GlobalDatePickerProvider } from "./GlobalDatePickerProvider";

export function GlobalProvider({ children }: PropsWithChildren<any>) {
  return (
    <NotificationProvider>
      <GlobalDatePickerProvider>
        <LibraryProvider>{children}</LibraryProvider>
      </GlobalDatePickerProvider>
    </NotificationProvider>
  );
}
