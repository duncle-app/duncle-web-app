import React from "react";
import { GlobalContext } from "../../../common/GlobalContext";
import { newLibrary } from "../../storybook-mocks/constants";
import MockForm from "../../storybook-mocks/mockForm";
import EditLibrary from "../../library-edit/components/EditLibrary";
import EditLibraryController from "./EditLibraryController";

export default {
  title: "Pages/EditLibrary",
};

export const withProps = () => (
  <GlobalContext.Provider value={{ currentLibrary: newLibrary }}>
    <MockForm>
      <EditLibraryController />
    </MockForm>
  </GlobalContext.Provider>
);
