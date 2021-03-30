import React from "react";
import { ContactButtonsRow } from "./DPButtons";
import { GlobalDatePickerProvider } from "../../../common/providers/GlobalDatePickerProvider";

export default {
  title: "Atoms/DatePickerButtons",
};

export const Default = () => (
  <GlobalDatePickerProvider>
    <ContactButtonsRow />
  </GlobalDatePickerProvider>
);
