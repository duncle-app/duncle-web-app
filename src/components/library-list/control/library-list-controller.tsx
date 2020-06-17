import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import Library from '../../../model/library'
import LibraryList from "../library-list";
import {LibraryManager} from "../../../common/library-manager";
import {useLibraryPouch} from "../../../common/hooks/UsePouch";

interface LibraryOverviewProps {
    libraryManager: LibraryManager;
}

function LibraryListController(props: LibraryOverviewProps) {
    const initialLibrary: Library[] = [];
    const [showAddLibraryComponent, setShowAddLibraryComponent] = useState(false);

    const [libraries, setLibraries]:
        [Library[], React.Dispatch<React.SetStateAction<Library[]>>] = useState(initialLibrary);
    let history = useHistory();

    // use library
    const { getAll } = useLibraryPouch()

    async function doLibraryCall() {
        const list: Library[] = await getAll()
        console.log(list)
    }

    useEffect(() => {
        doLibraryCall()
    });

    function routeToLibraryDetail(library: Library): void {
        history.push(`/library/${library.id}`);
    }
    function onAddLibraryClicked(): void {
        console.log('add library clicked');
        setShowAddLibraryComponent(true);
    }
    function onAddLibraryCancel(): void {
        setShowAddLibraryComponent(false);
    }
    function onAddLibrarySubmit(library: Library): void {
        props.libraryManager.addLibrary(library);
    }


    return (
        <LibraryList
            libraries={libraries}
            onLibraryClick={routeToLibraryDetail}
            onAddLibraryClick={onAddLibraryClicked}
            showAddLibraryComponent={showAddLibraryComponent}
            onAddLibraryCancel={onAddLibraryCancel}
            onAddLibrarySubmit={onAddLibrarySubmit}/>
    );
}

export default LibraryListController
