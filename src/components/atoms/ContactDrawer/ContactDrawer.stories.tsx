import React from "react";
import Drawer from "./ContactDrawer";
import {newLibrary} from "../../storybook-mocks/constants";
import MockForm from "../../storybook-mocks/mockForm";
import {GlobalContext} from "../../../common/GlobalContext";
import {action} from "@storybook/addon-actions";

export default {
    title: "Atoms/Drawer",
    component: Drawer,
};

export const withProps = () => (
    <GlobalContext.Provider value={{
            saveLibrary: () => action("Calling mock saveLibrary"),
            getAuthenticatedUser: () => action("Calling mock getAuthenticatedUser")
        }}>
        <MockForm>
            <Drawer library={newLibrary}/>
        </MockForm>
    </GlobalContext.Provider>
);
