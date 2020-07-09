import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Library from '../../../model/library'
import LibraryList from "../library-list";
import {LibraryManager} from "../../../common/library-manager";
import {useLibraryPouch} from "../../../common/hooks/UsePouch";
import {GlobalContext} from "../../../common/GlobalContext";

interface LibraryOverviewProps {
    libraryManager: LibraryManager;
}

type stink = {
    doc?: any;
    id: string;
    key: string;
    value: {
        rev: string;
        deleted?: boolean;
    }
}

function LibraryListController({libraryManager}: LibraryOverviewProps) {
    const initialLibrary: Library[] = [];
    const [showAddLibraryComponent, setShowAddLibraryComponent] = useState(false);
    const {libraryManager2} = useContext(GlobalContext)

    const [libraries, setLibraries] = useState(initialLibrary);
    let history = useHistory();

    // use library
    const {getAll} = useLibraryPouch()

    useEffect(() => {
        async function doLibraryCall() {
            const response = await getAll()
            let docs: Library[] = []
            console.log("Got back list", response.rows)
            response.rows.map((pouchRow: stink) => {
                console.log("actual doc", pouchRow.doc)
               docs.push(pouchRow.doc)
            })
            setLibraries(docs)
        }
        // doLibraryCall()
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
        libraryManager.addLibrary(library);
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
