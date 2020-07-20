import React from "react";
import TextArea from "./TextArea"
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: "Atoms/TextArea",
    component: TextArea,
};
export const withProps = () => (
    <MockForm>
        <TextArea name="example" placeholderText="Minimum of 4 rows"/>
    </MockForm>
);
