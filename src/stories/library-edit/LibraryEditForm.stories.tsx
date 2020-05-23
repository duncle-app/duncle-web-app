import React from "react";
import LibraryEdit from "../../library-edit/components/library-edit";
import { newLibrary } from "../constants";
import MockForm from "../mockForm";

export default {
  title: "Library Edit",
  component: LibraryEdit,
};

export const Props = () => (
  <MockForm>
    <LibraryEdit library={newLibrary} />
  </MockForm>
);

export const noProps = () => <LibraryEdit />;
