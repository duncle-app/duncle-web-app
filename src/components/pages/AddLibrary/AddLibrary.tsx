import React from 'react'
import {Form} from "react-final-form";
import AddLibraryForm from "../../organisms/AddLibrary/AddLibraryForm";
import NewLibrary from "../../../model/newLibrary";
import {useLibraryPouch} from "../../../common/hooks/UsePouch";
import {dateNowIso} from "../../../utils/dateUtil";
import { v4 as uuidv4 } from 'uuid';

export default function AddLibrary() {
    const {addLibrary} = useLibraryPouch()

    async function submitForm(library: NewLibrary) {
        const updatedLibrary: NewLibrary = addDefaults(library)
        await addLibrary(updatedLibrary)
    }

    return (
        <Form
            onSubmit={submitForm}
            component={AddLibraryForm}
        />
    )

}

function addDefaults(library: NewLibrary) {
    library._id = uuidv4()
    library.notes = []
    library.assignedRep = "TODO"
    library.dateUpdated = dateNowIso()
    library.totalSales = 0
    library.lastSale = 0
    return library
}
