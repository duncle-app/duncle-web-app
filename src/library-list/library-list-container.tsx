import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import {Library} from '../model/library'
import LibraryOverview from './components/library-overview';
import {LibraryListController} from './controller/library-list-controller';
import {AppState} from "../control/app-state";

interface LibraryOverviewProps {
    controller: LibraryListController,
    appState: AppState
}

function LibraryListContainer(props: LibraryOverviewProps) {
    const initialLibrary: Library[] = [];
    const [libraries, setLibraries]:
        [Library[], React.Dispatch<React.SetStateAction<Library[]>>] = useState(initialLibrary);
    let history = useHistory();


    useEffect(() => {
        props.controller.getListOfLibraries().subscribe(response => {
            setLibraries(response)
        })
    });

    function routeToLibraryDetail(library: Library): void {
        props.appState.setSelectedLibrary(library);
        history.push(`/libraries/${library.id}`)
    }

    return (
        <div>
            {libraries.map((lib: Library) => <LibraryOverview library={lib}
                                                              onClick={routeToLibraryDetail}/>)}
        </div>
    );
}

export default LibraryListContainer
