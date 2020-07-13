import React from "react";
import AddLibrary from "./AddLibrary"
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: "Organisms/AddLibrary",
    component: AddLibrary,
};

export const withProps = () => (
    <MockForm>
        <AddLibrary/>
    </MockForm>
);