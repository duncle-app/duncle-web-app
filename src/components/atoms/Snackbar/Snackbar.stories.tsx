import React from "react";
import {withKnobs} from "@storybook/addon-knobs";
import Snackbar from "./Snackbar";

export default {
    title: "Atoms/Snackbar",
    decorators: [withKnobs],
};

export const withProps = () =>
    <Snackbar/>