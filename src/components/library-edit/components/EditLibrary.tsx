import React from "react";
import Library from "../../../model/library";
import {Grid} from "@material-ui/core";
import CustomTextField from "../../atoms/TextField/CustomTextField";
import FormSubmitButton from "../../atoms/Button/FormSubmitButton";
import Form from "../../../common/Form";
import Paper from "@material-ui/core/Paper";
import useStyles from "../../../global-styles";
import TextField from "@material-ui/core/TextField";

interface LibraryEditProps {
    library: Library;
    formSubmit(values: any): any
}

export default function ({library, formSubmit}: LibraryEditProps) {
    const {
        street, city, county, level, libraryName, librarian, district, state,
        zip, size, email, phoneNumber, assistant, assignedRep, extension
    } = library;
    const {content, editLibrary} = useStyles()

    const formLabels = [
        {label: "Library Name", currentValue: libraryName,},
        {label: "Librarian", currentValue: librarian,},
        {label: "Assistant", currentValue: assistant,},
        {label: "Street", currentValue: street,},
        {label: "District", currentValue: district,},
        {label: "City", currentValue: city,},
        {label: "County", currentValue: county,},
        {label: "State", currentValue: state,},
        {label: "Zip", currentValue: zip,},
        {label: "Email", currentValue: email,},
        {label: "Phone Number", currentValue: phoneNumber,},
        {label: "extension", currentValue: extension,},
        {label: "Assigned Rep", currentValue: assignedRep,},
        {label: "Level", currentValue: level,},
        {label: "Size", currentValue: size,},
    ];

    return (
        <Paper className={content}>
            <Form onSubmit={formSubmit}>
                <Grid container>
                    {formLabels.map(({label, currentValue}, index) => {
                        return (
                            <Grid xs={6} className={editLibrary}>
                                <CustomTextField
                                    name={label}
                                    defaultValue={currentValue}
                                    fullWidth={true}
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
