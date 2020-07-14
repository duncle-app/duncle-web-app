import React from 'react'
import CustomTextField from "../../atoms/TextField/CustomTextField";
import EmailTextField from "../../atoms/TextField/EmailTextField";
import Grid from "@material-ui/core/Grid/Grid";
import {Card, Divider, Typography} from "@material-ui/core";
import useStyles from "../../../global-styles";

export default function () {
    const {closeInput} = useStyles();
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
    ]

    return (
        <>
            <Grid container justify="center">
                <Typography component="h1" variant="h5">Rep: Mr Sir</Typography>
            </Grid>
            <Grid container justify="center">
                {
                    librarianFields.map(
                        ({label, isRequired}) =>
                            <>
                                <Grid item xs={3}
                                      className={closeInput}
                                >
                                    {/*<Divider variant="inset" component="li"/>*/}
                                    <CustomTextField key={label} name={label} isRequired={isRequired}/>
                                </Grid>
                            </>
                    )
                }
                <EmailTextField/>
            </Grid>
        </>
    )
}
