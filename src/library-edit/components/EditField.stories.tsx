import React from "react";
import EditField from "./EditField";
import MockForm from "../../storybook-mocks/mockForm";

export default {
  title: "Edit Field",
  component: EditField,
};

export const withProps = () => (
  <MockForm>
    <EditField label="Name" id="1" value="Mr. Sir" />
  </MockForm>
);

export const noProps = () => (
  <MockForm>
    <EditField />
  </MockForm>
);
