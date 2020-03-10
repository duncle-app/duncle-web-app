import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import {Library} from '../../model/library'
import LibraryList from "../library-list";
import {LibraryManager} from "../../control/library-manager";

interface LibraryOverviewProps {
    libraryManager: LibraryManager;
}

function LibraryListController(props: LibraryOverviewProps) {
    const initialLibrary: Library[] = [];
    const [libraries, setLibraries]:
        [Library[], React.Dispatch<React.SetStateAction<Library[]>>] = useState(initialLibrary);
    let history = useHistory();

    useEffect(() => {
        props.libraryManager.getLibraries().subscribe(response => {
            setLibraries(response);
        })
    });

    function routeToLibraryDetail(library: Library): void {
        history.push(`/library/${library.id}`);
    }
    function onAddLibraryClicked(): void {
        console.log('add library clicked');
    }


    return (
        <LibraryList libraries={libraries} onLibraryClick={routeToLibraryDetail} onAddLibraryClick={onAddLibraryClicked}/>
    );
}

export default LibraryListController
