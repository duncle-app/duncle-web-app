import React, {useEffect, useState} from 'react'
import {Library} from "../../model/library";
import {AppState} from "../../control/app-state";
import {useHistory, useLocation} from 'react-router-dom';
import LibraryDetail from "../components/library-detail";



interface LibraryDetailProps {
    appState: AppState,
}


export function LibraryDetailController (props: LibraryDetailProps) {

    const [selectedLibrary, setSelectedLibrary] = useState(Library.None);
    let route  = useLocation();
    let history = useHistory();

    function onBack(): void {
        history.goBack();
    }

    useEffect(() => {

        const subscription = props.appState.getLibraries().subscribe((libraries: Library[]) => {
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
