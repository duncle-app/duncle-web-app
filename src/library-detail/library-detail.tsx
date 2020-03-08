import React, {useEffect, useState} from 'react'
import {Library} from "../model/library";
import {LibraryDetailController} from "./control/LibraryDetailController";


interface LibraryDetailProps {
    controller: LibraryDetailController
}


export function LibraryDetail (props: LibraryDetailProps) {

    const [selectedLibrary, setSelectedLibrary] = useState({name: ''});

    useEffect(() => {
        props.controller.getSelectedLibrary().subscribe( (response: Library) => {
            setSelectedLibrary(response);
        });
    });

    return (<div>{selectedLibrary.name}</div>)
}
