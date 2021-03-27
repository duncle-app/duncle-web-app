import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Snackbar from "./Snackbar";
import { GlobalContext } from "../../../common/GlobalContext";

export default {
  title: "Atoms/Snackbar",
  decorators: [withKnobs],
};

// export const Default = () =>
//     <Snackbar/>
