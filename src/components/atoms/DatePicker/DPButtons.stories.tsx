import React from "react";
import { ContactButtonsRow } from "./DPButtons";
import GlobalProvider from "../../../common/providers/GlobalProvider";

export default {
  title: "Atoms/DatePickerButtons",
};

export const Default = () => (
  <GlobalProvider>
    <ContactButtonsRow />
  </GlobalProvider>
);
