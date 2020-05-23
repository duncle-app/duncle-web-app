import React from "react";
import Drawer from "../../library-detail/components/OpDrawer";
import { newLibrary } from "../constants";

export default {
  title: "Drawer",
  component: Drawer,
};

export const withProps = () => <Drawer library={newLibrary} />;

export const noProps = () => <Drawer />;
