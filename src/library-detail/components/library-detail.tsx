import React from 'react';
import {Library} from "../../model/library";

interface LibraryDetailProps {
    library: Library,
    onBack() : void
}

function LibraryDetail(props: LibraryDetailProps) {
    return (
        <div>
            <div>
                <button onClick={props.onBack}>Back</button>
            </div>
            <div>{props.library.name}</div>
        </div>
    )
}

export default LibraryDetail;
