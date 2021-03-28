import React from "react";
import {
  ContactedByEmail,
  ContactedByPhone,
  ContactedInPerson,
} from "./DPButtons";

export default {
  title: "Atoms/DatePickerButtons",
};
export const Default = () => (
  <>
    <ContactedByEmail />
    <ContactedInPerson />
    <ContactedByPhone />
  </>
);
