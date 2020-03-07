import React from 'react'
import {Library} from "../../model/library";

interface LibraryOverviewProps {
    library: Library
    onClick(): void;
}

export default function LibraryOverview(props: LibraryOverviewProps) {
    return (
        <div onClick={props.onClick}>
            {props.library.name}
        </div>)
}

