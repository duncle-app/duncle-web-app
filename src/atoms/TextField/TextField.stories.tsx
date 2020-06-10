import React from "react";
import TextField from "./TextField";

export default {
    title: "Atoms/TextField",
    component: TextField,
};

export const withProps = () => <TextField name="Name" value="Mr Sir" />;