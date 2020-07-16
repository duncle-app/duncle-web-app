import React, {useEffect, useState} from 'react'
import Library from "../../../model/library";
import {useHistory, useLocation, useParams} from 'react-router-dom';
import LibraryDetail from "../components/library-detail";
import {LibraryManager} from "../../../common/library-manager";

import {GlobalContext} from "../../../common/GlobalContext";
import {NoLibrary} from "../../storybook-mocks/constants";

interface LibraryDetailProps {
    libraryManager: LibraryManager
}

type p = {
    libraryId: string;
}

export function LibraryDetailController(props: LibraryDetailProps) {
    const {libraryManager} = props
    const [selectedLibrary, setSelectedLibrary] = useState(NoLibrary);

    const { libraryId }: p = useParams()

    let route = useLocation();
    let history = useHistory();

    function onBack(): void {
        history.goBack();
    }

    function onEdit(library: Library): void {
        console.log('on edit clicked...');
        // console.log(`setting library to: ${library}`)
        history.push(`/library/${libraryId}/edit`)
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
        const subscription = libraryManager.getLibraries().subscribe((libraries: Library[]) => {
            const libraryId = route.pathname.split('/')[2];
            const library: Library | undefined = libraries.find(x => x._id === libraryId);
            if (library) setSelectedLibrary(library);
            else setSelectedLibrary(NoLibrary);
        });

        return () => subscription.unsubscribe();
    });

    return <LibraryDetail library={selectedLibrary} onBack={onBack} onEdit={onEdit}/>
}
