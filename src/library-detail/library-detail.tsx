import React, {useEffect, useState} from 'react'
import {Library} from "../model/library";
import {LibraryDetailController} from "./control/LibraryDetailController";


interface LibraryDetailProps {
    controller: LibraryDetailController
}


export function LibraryDetail (props: LibraryDetailProps) {

    const [selectedLibrary, setSelectedLibrary] = useState({name: 'cheese'});

    useEffect(() => {
        props.controller.getSelectedLibrary().subscribe( (x: Library) => {
            setSelectedLibrary(x);
        });
    });

    return (<div>{selectedLibrary.name}</div>)
}
