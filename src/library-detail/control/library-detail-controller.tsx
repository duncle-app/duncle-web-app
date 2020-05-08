import React, {useEffect, useState} from 'react'
import {Library} from "../../model/library";

import {useHistory, useLocation} from 'react-router-dom';
import LibraryDetail from "../components/library-detail";
import {LibraryManager} from "../../control/library-manager";

interface LibraryDetailProps {
    libraryManager: LibraryManager
}

function wait(ms: number) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

export function LibraryDetailController(props: LibraryDetailProps) {
    const {libraryManager} = props
    const [selectedLibrary, setSelectedLibrary] = useState(Library.None);

    let route = useLocation();
    let history = useHistory();

    function onBack(): void {
        history.goBack();
    }

    function onEdit(library: Library): void {
        console.log('on edit clicked...');
        // console.log(`setting library to: ${library}`)
        history.push(`/library/${library.id}/edit`)
    }
    //
    // function onNewSales(sale: Sale): void {
    //     console.log('on new Sales Clicked.');
    //     libraryManager.addSale(sale)
    //     // TODO: Show the new Sales component...
    // }

    useEffect(() => {
        /*
        * app state holds the current state of the app. Primarily, the list of libraries. Currently, the libraries are
        * held as a 'Behavior subject'. A behavior subject is an observable that can be subscribed too, and on
        * subscription will immediately emit it's current value. This allows this component to listen to any changes
        * to the libraries held in the app state. If the libraries in the app state are ever updated elsewhere, say for
        * example through getting internet connection, then the behavior subject will be updated, and will emit its new
        * value. This subscription will get the new value and update the UI seamlessly.
        * */
        const subscription = libraryManager.getLibraries().subscribe((libraries: Library[]) => {
            const libraryId = route.pathname.split('/')[2];
            const library: Library | undefined = libraries.find(x => x.id === libraryId);
            if (library) setSelectedLibrary(library);
            else setSelectedLibrary(Library.None);
        });

        return () => subscription.unsubscribe();
    });

    return (<LibraryDetail library={selectedLibrary} onBack={onBack} onEdit={onEdit}/>)
}
