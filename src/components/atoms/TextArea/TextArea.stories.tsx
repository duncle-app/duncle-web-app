import React from "react";
import TextArea from "./TextArea"

export default {
    title: "Atoms/TextArea",
    component: TextArea,
};
export const withProps = () => (
    <TextArea placeholderText={"Minimum of 4 rows"}/>
);
