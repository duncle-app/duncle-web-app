import React from "react";
import Drawer from "./OpDrawer";
import { newLibrary } from "../../storybook-mocks/constants";

export default {
  title: "Drawer",
  component: Drawer,
};

export const withProps = () => <Drawer library={newLibrary} />;

