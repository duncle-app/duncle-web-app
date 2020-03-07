import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import {Library} from '../model/library'
import LibraryOverview from './components/library-overview';
import {LibraryListController} from './controller/library-list-controller';

interface LibraryOverviewProps {
    controller: LibraryListController
}

function LibraryList(props: LibraryOverviewProps) {
    const initialLibrary: Library[] = [];
    const [libraries, setLibraries]:
        [Library[], React.Dispatch<React.SetStateAction<Library[]>>] = useState(initialLibrary);
    let history = useHistory()

    useEffect(() => {
        props.controller.getListOfLibraries().subscribe(response => {
            setLibraries(response)
        })
    });

    function reRoute(): void {
        history.push('/mrsir')
    }

    return (
        <div>
            {libraries.map((lib: Library) => <LibraryOverview library={lib}
                                                              onClick={reRoute}/>)}
        </div>
    );
}

export default LibraryList
