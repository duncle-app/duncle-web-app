import React from "react";
import Drawer from "./OpDrawer";
import {newLibrary} from "../../storybook-mocks/constants";
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: "Drawer",
    component: Drawer,
};

export const withProps = () => (
    <MockForm>
        <Drawer library={newLibrary}/>
    </MockForm>
);
