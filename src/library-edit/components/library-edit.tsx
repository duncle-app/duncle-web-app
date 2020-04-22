import React, {useEffect} from 'react'
import {Library} from "../../model/library";
import {Grid} from "@material-ui/core";
import {LibraryManager} from "../../control/library-manager";
import EditField from "./EditField";

interface LibraryEditProps {
    onLoad(): void,
    library: Library,
    libraryManager: LibraryManager
}

export default function LibraryEdit(props: LibraryEditProps) {
    const {address, contact, city, county, id, level, libraryName, notes, sales, size, state, zip} = props.library;
    console.log('Library edit', props.library);
    // this is the JSON object key that's returned when we click the the submit button.
    // i.e. { library : { .... } }

    useEffect(() => {
        props.onLoad();
    });

    const formLabels = [
        {
            identifier: 'name',
            labelPlaceholder: 'Library Name',
            propName: libraryName,
        },
        {
            identifier: 'address',
            labelPlaceholder: 'Address',
            propName: address,
        },
        {
            identifier: 'city',
            labelPlaceholder: 'City',
            propName: city,
        },
        {
            identifier: 'state',
            labelPlaceholder: 'State',
            propName: state,
        },
        {
            identifier: 'zip',
            labelPlaceholder: 'Zip',
            propName: zip,
        },
        {
            identifier: 'county',
            labelPlaceholder: 'County',
            propName: county,
        },
        {
            identifier: 'level',
            labelPlaceholder: 'Level',
            propName: level,
        },
        {
            identifier: 'size',
            labelPlaceholder: 'Size',
            propName: size,
        },
    ];

    // todo - ask aaron
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
                            value={field.propName}
                        />
                    )
                })}
            </Grid>
            <button/>
        </>

    );
}
