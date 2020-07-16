import React from 'react'
import {Form} from "react-final-form";
import {LogInForm} from "../../organisms/LogIn/LogInForm";
import Library from "../../../model/library";
import AddLibraryForm from "../../organisms/AddLibrary/AddLibraryForm";

export default function AddLibrary() {
    function submitForm(library: Library) {
        console.log("submit add library", library);
    }

    return(
        <Form
            onSubmit={submitForm}
            component={AddLibraryForm}
        />
    )

}
