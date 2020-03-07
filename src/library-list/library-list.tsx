import React from 'react';
import {Library} from '../model/library'
import LibraryOverview from "./components/library-overview";

function LibraryList() {
    let libraries: Library[] = [{name: 'Haggis'}, {name: 'Monster'}];

    return (

        <div>
            {libraries.map(lib => <LibraryOverview name={lib.name} />)}
        </div>
    );
}

export default LibraryList
