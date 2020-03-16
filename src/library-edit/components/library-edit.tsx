import React from 'react'
import {Library} from "../../model/library";
import {Grid} from "@material-ui/core";
import {LibraryManager} from "../../control/library-manager";
import EditField from "./EditField";

interface LibraryEditProps {
    library: Library,
    libraryManager: LibraryManager
}

export default function LibraryEdit(props: LibraryEditProps) {
    const {address, contact, city, county, id, level, name, notes, sales, size, state, zip} = props.library;
    console.log(props.library);
    // this is the JSON object key that's returned when we click the the submit button.
    // i.e. { library : { .... } }

    const formLabels = [
        {
            identifier: 'name',
            labelPlaceholder: 'Library Name',
            value: name,
        },
        {
            identifier: 'address',
            labelPlaceholder: 'Address',
        },
        {
            identifier: 'city',
            labelPlaceholder: 'City',
        },
        {
            identifier: 'state',
            labelPlaceholder: 'State',
        },
        {
            identifier: 'zip',
            labelPlaceholder: 'Zip',
        },
        {
            identifier: 'county',
            labelPlaceholder: 'County',
        },
        {
            identifier: 'level',
            labelPlaceholder: 'Level',
        },
        {
            identifier: 'size',
            labelPlaceholder: 'Size',
        },
    ];

    return (
        <>
            <Grid container direction="column" spacing={1}>
                <div>
                    Library Edit
                </div>
                {formLabels.map(field => {
                    return (
                        <EditField
                            label={field.labelPlaceholder}
                            placeholder={field.labelPlaceholder}
                            id={field.identifier}
                            value={field.value}
                        />
                    )
                })}
            </Grid>
            <button/>
        </>

    );
}
