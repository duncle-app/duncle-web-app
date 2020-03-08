import React, {useEffect, useState} from 'react'
import {Library} from "../../model/library";

import {useHistory, useLocation} from 'react-router-dom';
import LibraryDetail from "../components/library-detail";
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LibraryManager} from "../../control/library-manager";



interface LibraryDetailProps {
    libraryManager: LibraryManager
}


export function LibraryDetailController (props: LibraryDetailProps) {

    const [selectedLibrary, setSelectedLibrary] = useState(Library.None);
    let route  = useLocation();
    let history = useHistory();

    function onBack(): void {
        // history.goBack();
        history.push('/')
    }

    useEffect(() => {

        // TODO: I don't like this...
        const subscription = props.libraryManager.getLibraries().subscribe((libraries: Library[]) => {
            const libraryId = route.pathname.split('/')[2];
            const library: Library | undefined = libraries.find(x => x.id === libraryId);

            if (library) setSelectedLibrary(library);
            else setSelectedLibrary(Library.None);

            console.log('the id is', libraryId);
            console.log('setting library to', library);
        });

        return () => subscription.unsubscribe();
    });

    return (<LibraryDetail library={selectedLibrary} onBack={onBack}/>)
}
