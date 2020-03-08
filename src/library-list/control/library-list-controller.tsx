import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import {Library} from '../../model/library'
import {AppState} from "../../control/app-state";
import {LibraryListService} from "./library-list-service";
import LibraryList from "../library-list";

interface LibraryOverviewProps {
    appState: AppState,
    libraryListService: LibraryListService
}

function LibraryListController(props: LibraryOverviewProps) {
    const initialLibrary: Library[] = [];
    const [libraries, setLibraries]:
        [Library[], React.Dispatch<React.SetStateAction<Library[]>>] = useState(initialLibrary);
    let history = useHistory();

    useEffect(() => {
        props.libraryListService.getLibraries().subscribe(response => {
            setLibraries(response);
            props.appState.setLibraries(response);
        })
    });

    function routeToLibraryDetail(library: Library): void {
        props.appState.setSelectedLibrary(library);
        history.push(`/library/${library.id}`);
    }


    return (
        <LibraryList libraries={libraries} onLibraryClick={routeToLibraryDetail}/>
    );
}

export default LibraryListController
