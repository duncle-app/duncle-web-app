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
    let addLibraryMenu = <div/>;
    if (props.showAddLibraryComponent) addLibraryMenu = <AddLibrary onCancel={props.onAddLibraryCancel}
                                                                    onSubmit={props.onAddLibrarySubmit}/>;
    return (
        <div>
            <h1>Libraries</h1>
            <div>
                {props.libraries.map((lib: Library) => <LibraryOverview library={lib}
                                                                        key={lib.id}
                                                                        onClick={props.onLibraryClick}/>)}
            </div>
            <div>
                <button onClick={props.onAddLibraryClick}>+</button>
            </div>
            {addLibraryMenu}
        </div>

    )
}

export default LibraryList;
