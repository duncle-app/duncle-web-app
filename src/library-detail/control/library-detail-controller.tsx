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
    function onEdit(): void {
        console.log('on edit clicked...');
        // TODO: edit the component...
    }
    function onNewSales(library: Library): void {
        console.log('on new Sales Clicked.');
        // TODO: Show the new Sales component...
    }

    useEffect(() => {
        /*
        * app state holds the current state of the app. Primarily, the list of libraries. Currently, the libraries are
        * held as a 'Behavior subject'. A behavior subject is an observable that can be subscribed too, and on
        * subscription will immediately emit it's current value. This allows this component to listen to any changes
        * to the libraries held in the app state. If the libraries in the app state are ever updated elsewhere, say for
        * example through getting internet connection, then the behavior subject will be updated, and will emit its new
        * value. This subscription will get the new value and update the UI seamlessly.
        * */
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

    return (<LibraryDetail library={selectedLibrary} onBack={onBack} onEdit={onEdit} onNewSales={onNewSales}/>)
}
