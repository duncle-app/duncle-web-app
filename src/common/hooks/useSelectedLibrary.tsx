import React, {useState} from 'react'
import Library from "../../model/library";

function useSelectedLibrary(library: Library): Library {
    const [selectedLibrary, setSelectedLibrary] = useState(Library.None)

    return selectedLibrary;
}

export default useSelectedLibrary;