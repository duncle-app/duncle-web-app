import React, {useEffect, useState} from 'react';
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

    useEffect(() => {
        props.controller.getListOfLibraries().subscribe(response => {
            setLibraries(response)
        })
    });

    return (
        <div>
            {libraries.map((lib: Library) => <LibraryOverview library={lib} onClick={() => console.log('clicked on Benis')}/>)}
        </div>
    );
}

export default LibraryList
