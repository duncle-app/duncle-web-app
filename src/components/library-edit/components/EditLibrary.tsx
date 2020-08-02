import React from "react";
import Library from "../../../model/library";
import {Grid} from "@material-ui/core";
import CustomTextField from "../../atoms/TextField/CustomTextField";
import FormSubmitButton from "../../atoms/Button/FormSubmitButton";
import Form from "../../../common/Form";

interface LibraryEditProps {
    library: Library;
    formSubmit(values: any): any
}

export default function ({library, formSubmit}: LibraryEditProps) {
    const {street, city, county, level, libraryName, state, zip, size} = library;

    const formLabels = [
        {label: "Library Name", propName: libraryName,},
        {label: "Street", propName: street,},
        {label: "City", propName: city,},
        {label: "State", propName: state,},
        {label: "Zip", propName: zip,},
        {label: "County", propName: county,},
        {label: "Level", propName: level,},
        {label: "Size", propName: size,},
    ];

    return (
        <>
            <Form onSubmit={formSubmit}>
                <Grid container direction="column" spacing={1}>
                    <div>Library Edit</div>
                    {formLabels.map(({label, propName}) => {
                        return (
                            <CustomTextField
                                name={label}
                                defaultValue={propName}
                                isRequired
                            />
                        );
                    })}
                </Grid>
                <FormSubmitButton DisplayText="Save Library"/>
            </Form>
        </>
    );
}
