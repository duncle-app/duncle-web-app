import React from 'react';
import {Library} from "../../model/library";
import {Grid} from "@material-ui/core";
import useStyles from "../../global-styles";
import OpDrawer from "./OpDrawer";

interface LibraryDetailProps {
    library: Library,

    onBack(): void,

    onEdit(library: Library): void,
}

function LibraryDetail(props: LibraryDetailProps) {

    return (
        <>
            <div>
                <button onClick={props.onBack}>Back</button>
                <button onClick={() => props.onEdit(props.library)}>Edit</button>
            </div>

            <OpDrawer library={props.library}/>

            <Grid container>
                <div>

                    <h2>{props.library.libraryName}</h2>
                    <div>Address: {props.library.address}</div>
                    <div>City: {props.library.city}</div>
                    <div>State: {props.library.state}</div>
                    <div>Zip: {props.library.zip}</div>
                    <div>County: {props.library.county}</div>

                    <h3>School info:</h3>
                    <div>Size: {props.library.size}</div>
                    <div>Level: {props.library.level}</div>
                </div>

                <Grid item xs={6}>
                    <h2>Contact</h2>
                    <div>Name: {props.library.contact.firstName} {props.library.contact.lastName}</div>
                    <div>Phone: {props.library.contact.phoneNumber}</div>
                    <div>Email: {props.library.contact.emailAddress}</div>
                </Grid>
                <Grid item xs={12}>
                    <h2>Notes</h2>
                    <div>{props.library.notes}</div>
                </Grid>

            </Grid>
        </>
    )
}

export default LibraryDetail;
