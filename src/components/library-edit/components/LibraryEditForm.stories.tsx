import React from "react";
import { mockFunction, newLibrary } from "../../storybook-mocks/constants";
import MockForm from "../../storybook-mocks/mockForm";
import EditLibrary from "./EditLibrary";

export default {
  title: "Elements/EditLibrary",
};

export const Props = () => (
  <MockForm>
    <EditLibrary library={newLibrary} formSubmit={mockFunction} />
  </MockForm>
);
