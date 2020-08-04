import React, {useContext} from 'react'
import {GlobalContext} from "../../../common/GlobalContext";
import EditLibrary from "../../library-edit/components/EditLibrary";
import { useHistory } from 'react-router-dom';

export default function EditLibraryController() {
    const {currentLibrary} = useContext(GlobalContext)
    const history = useHistory()

    function saveEditedLibrary(values: any) {
        // this contains a subset of the props, and just save those to the new object
        // navigate to previous page
        console.log("save whatever is listed here", values)
        history.goBack()
    }

    return (
        <EditLibrary library={currentLibrary} formSubmit={saveEditedLibrary}/>
    )
}
