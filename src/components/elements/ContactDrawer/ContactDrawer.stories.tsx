import React from "react";
import Drawer from "./ContactDrawer";
import { newLibrary } from "../../storybook-mocks/constants";
import MockForm from "../../storybook-mocks/MockForm";
import { GlobalContext } from "../../../common/GlobalContext";
import { action } from "@storybook/addon-actions";

export default {
  title: "Elements/Drawer",
  component: Drawer,
};

export const Default = () => (
  <GlobalContext.Provider
    value={{
      saveLibrary: () => action("Calling mock saveLibrary"),
      getAuthenticatedUser: () => action("Calling mock getAuthenticatedUser"),
    }}
  >
    <MockForm>
      <Drawer
        library={newLibrary}
        handleScheduleNextAppointment={action("Submitted")}
      />
    </MockForm>
  </GlobalContext.Provider>
);
