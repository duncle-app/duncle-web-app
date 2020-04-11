import {Library} from "../model/library";
import LibraryOverview from "./components/library-overview";
import React from "react";
import AddLibrary from "./components/add-library";

interface LibraryListProps {
    libraries: Library[]
    onLibraryClick(library: Library): void
    onAddLibraryClick(): void,
    showAddLibraryComponent: boolean,
    onAddLibraryCancel(): void,
    onAddLibrarySubmit(library: Library): void,
}

function LibraryList(props: LibraryListProps) {
    const { showAddLibraryComponent, onLibraryClick, onAddLibraryCancel, onAddLibrarySubmit, onAddLibraryClick, libraries } = props;

    return (
        <div>
            <h1>Libraries</h1>
            <div>
                {libraries.map((lib: Library) => <LibraryOverview library={lib}
                                                                        key={lib.id}
                                                                        onClick={onLibraryClick}/>)}
            </div>
            <div>
                <button onClick={onAddLibraryClick}>+</button>
            </div>
            {
                showAddLibraryComponent &&
                <AddLibrary onCancel={onAddLibraryCancel}
                onSubmit={onAddLibrarySubmit}/>
            }
        </div>

    )
}

export default LibraryList;
