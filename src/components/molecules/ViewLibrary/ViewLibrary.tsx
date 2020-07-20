import React from "react";
import Library from "../../../model/library";
import OpDrawer from "../../atoms/ContactDrawer/ContactDrawer";
import {useHistory, useParams} from "react-router-dom";

interface LibraryDetailProps {
    library: Library;
}

type p = {
    libraryId: string;
}

function ViewLibrary({library}: LibraryDetailProps) {
    let history = useHistory();
    const {libraryId}: p = useParams()

    function onBack(): void {
        history.goBack();
    }

    function onEdit(library: Library): void {
        console.log('on edit clicked...');
        history.push(`/library/${libraryId}/edit`)
    }

    return (
        <>
            <div>
                <button onClick={onBack}>Back</button>
                <button onClick={() => onEdit(library)}>Edit</button>
            </div>

            <OpDrawer library={library}/>
        </>
    );
}

export default ViewLibrary;
