import React from "react";
import Drawer from "./ContactDrawer";
import {newLibrary} from "../../storybook-mocks/constants";
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: "Atoms/Drawer",
    component: Drawer,
};

export const withProps = () => (
    <MockForm>
        <Drawer library={newLibrary}/>
    </MockForm>
);
