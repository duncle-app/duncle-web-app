import React, {useContext} from 'react'
import {GlobalContext} from "../../../common/GlobalContext";
import EditLibrary, {EditLibrarySubmitProps} from "../../library-edit/components/EditLibrary";
import {useHistory} from 'react-router-dom';
import {useLibraryPouch} from "../../../common/hooks/UsePouch";
import {cloneDeep, isEqual} from 'lodash'

export default function EditLibraryController() {
    const {currentLibrary, setCurrentLibrary} = useContext(GlobalContext)
    const {saveLibrary} = useLibraryPouch()
    const history = useHistory()

    async function saveEditedLibrary(values: EditLibrarySubmitProps) {
        // this contains a subset of the props, and just save those to the new object
        try {
            const copy = cloneDeep(currentLibrary)
            const editedLibrary = Object.assign(currentLibrary, values)

            if (!isEqual(copy, editedLibrary)) {
                // @ts-ignore
                const {rev} = await saveLibrary(editedLibrary);
                currentLibrary._rev = rev
                setCurrentLibrary(currentLibrary)
                console.log("Saving, since there's a difference")
            }
            // todo - add success snackbar
            // navigate to previous page
            history.goBack()
        } catch (e) {
            throw new Error(`Failed to update library: ${e}`)
        }
    }

    return (
        <EditLibrary library={currentLibrary} formSubmit={saveEditedLibrary}/>
    )
}
