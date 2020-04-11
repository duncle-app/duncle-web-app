import React from 'react'
import {Library} from "../../model/library";

interface LibraryOverviewProps {
    library: Library
    onClick(library: Library): void;
}

export default function LibraryOverview(props: LibraryOverviewProps) {
    return (
        <div onClick={() => props.onClick(props.library)}>
            {props.library.libraryName}
        </div>
        )
}

