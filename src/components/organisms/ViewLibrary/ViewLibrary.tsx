import React from "react";
import Library from "../../../model/library";
import ContactDrawer from "../../atoms/ContactDrawer/ContactDrawer";
import {useHistory, useParams} from "react-router-dom";
import NoteList from "../../molecules/NoteList/NoteList";
import {newNotes} from "../../storybook-mocks/constants";
import Drawer from "@material-ui/core/Drawer";
import useStyles from "../../../global-styles";

interface LibraryDetailProps {
    library: Library;
}

type p = {
    libraryId: string;
}

function ViewLibrary({library}: LibraryDetailProps) {
    const {content, flex} = useStyles()
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
        <div className={flex}>
            <button onClick={onBack}>Back</button>
            <button onClick={() => onEdit(library)}>Edit</button>

            <ContactDrawer library={library}/>
            {/*<main className={content}>*/}
                <NoteList notes={newNotes}/>
            {/*</main>*/}
        </div>
    );
}

export default ViewLibrary;
