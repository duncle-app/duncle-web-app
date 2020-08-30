import React from "react";
import Library from "../../../model/library";
import {Grid} from "@material-ui/core";
import CustomTextField from "../../atoms/TextField/CustomTextField";
import FormSubmitButton from "../../atoms/Button/FormSubmitButton";
import Form from "../../../common/Form";
import Paper from "@material-ui/core/Paper";
import useStyles from "../../../global-styles";

interface LibraryEditProps {
    library: Library;

    formSubmit(values: any): any
}

interface LabelProps {
    label: string
    currentValue: string | number | undefined
    isRequired: boolean
}

export default function ({library, formSubmit}: LibraryEditProps) {
    const {
        street, city, county, level, libraryName, librarian, district, state,
        zip, size, email, phoneNumber, assistant, assignedRep, extension
    } = library;
    const {content, editLibrary} = useStyles()
    const isRequired: boolean = true;

    const formLabels: LabelProps[] = [
        {label: "Library Name", currentValue: libraryName, isRequired},
        {label: "Librarian", currentValue: librarian, isRequired},
        {label: "Assistant", currentValue: assistant, isRequired: false},
        {label: "Street", currentValue: street, isRequired},
        {label: "District", currentValue: district, isRequired},
        {label: "City", currentValue: city, isRequired},
        {label: "County", currentValue: county, isRequired},
        {label: "State", currentValue: state, isRequired},
        {label: "Zip", currentValue: zip, isRequired},
        {label: "Email", currentValue: email, isRequired},
        {label: "Phone Number", currentValue: phoneNumber, isRequired},
        {label: "extension", currentValue: extension, isRequired: false},
        {label: "Assigned Rep", currentValue: assignedRep, isRequired},
        {label: "Level", currentValue: level, isRequired: false},
        {label: "Size", currentValue: size, isRequired: false},
    ];

    return (
        <Paper className={content}>
            <Form onSubmit={formSubmit}>
                <Grid container>
                    {formLabels.map(({label, currentValue, isRequired}, index) => {
                        return (
                            <Grid xs={6} className={editLibrary}>
                                <CustomTextField
                                    name={label}
                                    defaultValue={currentValue}
                                    alsoInitialValue
                                    fullWidth={true}
                                    isRequired={isRequired}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <FormSubmitButton DisplayText="Save Library"/>
            </Form>
        </Paper>
    );
}
