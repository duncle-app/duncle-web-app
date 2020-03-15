import React, {useEffect, useState} from 'react'
import {Library} from "../../model/library";
import LibraryEdit from "../components/library-edit";
import {LibraryManager} from "../../control/library-manager";
import {useLocation} from "react-router-dom";

interface LibraryEditControllerProps {
    libraryManager: LibraryManager
}

function LibraryEditController(props: LibraryEditControllerProps) {
    // todo - srn - move this to a custom hook
    const [selectedLibrary, setSelectedLibrary] = useState(Library.None);
    const {libraryManager} = props;

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
        // todo - srn - break this out to a common class
        const subscription = libraryManager.getLibraries().subscribe((libraries: Library[]) => {
            const libraryId = route.pathname.split('/')[2];
            const library: Library | undefined = libraries.find(x => x.id === libraryId);
            if (library) setSelectedLibrary(library);
            else setSelectedLibrary(Library.None);
        });

        return () => subscription.unsubscribe();
    });

    const handleSubmit = (library: Library) => {
        libraryManager.updateLibrary(library);
    };

    return (
        <>
            {/*<Form onSubmit={handleSubmit}>*/}
                <LibraryEdit library={selectedLibrary} libraryManager={libraryManager}/>
            {/*</Form>*/}
        </>
    );
}

export default LibraryEditController;
