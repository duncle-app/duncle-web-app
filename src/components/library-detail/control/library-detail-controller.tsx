import React, {useEffect, useState} from 'react'
import Library from "../../../model/library";
import {useHistory, useLocation, useParams} from 'react-router-dom';
import ViewLibrary from "../../molecules/ViewLibrary/ViewLibrary";
import {LibraryManager} from "../../../common/library-manager";
import {NoLibrary} from "../../storybook-mocks/constants";

interface LibraryDetailProps {
    libraryManager: LibraryManager
}

export function LibraryDetailController(props: LibraryDetailProps) {
    const {libraryManager} = props
    const [selectedLibrary, setSelectedLibrary] = useState(NoLibrary);

    let route = useLocation();

    useEffect(() => {
        /*
        * app state holds the current state of the app. Primarily, the list of libraries. Currently, the libraries are
        * held as a 'Behavior subject'. A behavior subject is an observable that can be subscribed too, and on
        * subscription will immediately emit it's current value. This allows this component to listen to any changes
        * to the libraries held in the app state. If the libraries in the app state are ever updated elsewhere, say for
        * example through getting internet connection, then the behavior subject will be updated, and will emit its new
        * value. This subscription will get the new value and update the UI seamlessly.
        * */
        const subscription = libraryManager
            .getLibraries()
            .subscribe((libraries: Library[]) => {
                const libraryId = route.pathname.split('/')[2];
                const library: Library | undefined = libraries.find(x => x._id === libraryId);
                if (library) setSelectedLibrary(library);
                else setSelectedLibrary(NoLibrary);
            });

        return () => subscription.unsubscribe();
    });

    return <ViewLibrary library={selectedLibrary}/>
}
