import React, {useState} from 'react'
import Library from "../../model/library";
import {NoLibrary} from "../../components/storybook-mocks/constants";

function useSelectedLibrary(library: Library): Library {
    const [selectedLibrary, setSelectedLibrary] = useState(NoLibrary)

    return selectedLibrary;
}

export default useSelectedLibrary;
