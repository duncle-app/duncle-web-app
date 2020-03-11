import React, {useState} from 'react'
import {Library} from "../../model/library";
import LibraryEdit from "../components/library-edit";
import {LibraryManager} from "../../control/library-manager";

interface LibraryEditControllerProps {
    libraryManager: LibraryManager
}

function LibraryEditController(props: LibraryEditControllerProps) {
    // todo - srn - move this to a custom hook
    const [selectedLibrary, setSelectedLibrary] = useState(Library.None);

    return (
        <>
            <LibraryEdit library={selectedLibrary}/>
        </>
    );
}

export default LibraryEditController;