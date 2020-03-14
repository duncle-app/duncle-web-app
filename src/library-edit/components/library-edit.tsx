import React, {useEffect, useState} from 'react'
import {Library} from "../../model/library";
import { Grid } from "@material-ui/core";

interface LibraryEditProps {
    library: Library,
}

export default (props: LibraryEditProps) => {
    // const [library, setLibrary] = useState(Library.None);
    const {library} = props;
    const {address, contact, city, county, id, level, name, notes, sales, size, state, zip} = library;
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
