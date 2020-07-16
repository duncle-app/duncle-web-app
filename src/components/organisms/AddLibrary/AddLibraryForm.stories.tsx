import React from "react";
import MockForm from "../../storybook-mocks/mockForm";
import AddLibraryForm from "./AddLibraryForm";

export default {
    title: "Organisms/AddLibraryForm",
    component: AddLibraryForm,
};

export const withProps = () => (
    <MockForm>
        <AddLibraryForm/>
    </MockForm>
);
