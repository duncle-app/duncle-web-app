import React from "react";
import LibraryEdit from "./library-edit";
import { newLibrary } from "../../storybook-mocks/constants";
import MockForm from "../../storybook-mocks/mockForm";

export default {
  title: "Organisms/LibraryEdit",
  component: LibraryEdit,
};

export const Props = () => (
  <MockForm>
    <LibraryEdit library={newLibrary}/>
  </MockForm>
);
