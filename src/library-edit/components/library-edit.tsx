import React, {useEffect, useState} from 'react'
import {Library} from "../../model/library";
import {Grid} from "@material-ui/core";
import {LibraryManager} from "../../control/library-manager";

interface LibraryEditProps {
    library: Library,
    libraryManager: LibraryManager
}

export default function LibraryEdit (props: LibraryEditProps) {
    const {address, contact, city, county, id, level, name, notes, sales, size, state, zip} = props.library;

    return (
        <>
            <Grid container direction="column" spacing={1}>
                <div>
                    Library Edit
                </div>
                <div>
                    {zip}
                </div>
                <div>
                    {address}
                </div>
                <div>
                    {city}
                </div>
            </Grid>

        </>

    );
}
