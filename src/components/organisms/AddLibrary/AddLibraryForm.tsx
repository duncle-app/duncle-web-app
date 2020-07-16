import React from 'react'
import CustomTextField from "../../atoms/TextField/CustomTextField";
import Grid from "@material-ui/core/Grid/Grid";
import {Typography} from "@material-ui/core";
import useStyles from "../../../global-styles";
import FormSubmitButton from "../../atoms/Button/FormSubmitButton";

export default function (props: any) {
    const {handleSubmit} = props;
    const {closeInput, form} = useStyles();
    const isRequired: boolean = true;

    const librarianFields = [
        {label: "Library", isRequired},
        {label: "Librarian", isRequired},
        {label: "Assistant"},
        {label: "Phone Number", isRequired},
        {label: "Extension"},
        {label: "Street", isRequired},
        {label: "City", isRequired},
        {label: "County", isRequired},
        {label: "District"},
        {label: "Zip", isRequired},
        {label: "State", isRequired},
        {label: "Level"},
        {label: "Size"},
        {label: "Email", isRequired},
    ];

    return (
        <form className={form} noValidate onSubmit={handleSubmit}>
            <Grid container justify="center">
                <Typography component="h1" variant="h5">Rep: Terry</Typography>
            </Grid>
            <Grid container justify="center">
                {
                    librarianFields.map(
                        ({label, isRequired}) =>
                            <Grid item xs={3} className={closeInput}>
                                <CustomTextField key={label} name={label} isRequired={isRequired}/>
                            </Grid>
                    )
                }
            </Grid>
            <FormSubmitButton DisplayText="Create Library"/>
        </form>
    )
}
