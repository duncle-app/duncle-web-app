import {Library} from "../model/library";
import LibraryOverview from "./components/library-overview";
import React from "react";

interface LibraryListProps {
    libraries: Library[]
    onLibraryClick(library: Library): void
    onAddLibraryClick(): void
}

function LibraryList(props: LibraryListProps) {
    return (
        <div>
            <h1>Libraries</h1>
            <div>
                {props.libraries.map((lib: Library) => <LibraryOverview library={lib}
                                                                        key={lib.id}
                                                                        onClick={props.onLibraryClick}/>)}
            </div>
            <div><button onClick={props.onAddLibraryClick}>+</button></div>
        </div>

    )
}

export default LibraryList;
