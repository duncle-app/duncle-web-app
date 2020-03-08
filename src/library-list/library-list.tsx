import {Library} from "../model/library";
import LibraryOverview from "./components/library-overview";
import React from "react";

interface LibraryListProps {
    libraries: Library[]
    onLibraryClick(library: Library): void
}

function LibraryList(props: LibraryListProps) {
    return (
        <div>
            {props.libraries.map((lib: Library) => <LibraryOverview library={lib}
                                                              key={lib.id}
                                                              onClick={props.onLibraryClick}/>)}
        </div>
    )
}

export default LibraryList;
