import React, {useContext} from "react";
import Library from "../../../model/library";
import ContactDrawer from "../../atoms/ContactDrawer/ContactDrawer";
import {useHistory, useParams} from "react-router-dom";
import NoteList from "../../molecules/NoteList/NoteList";
import {newNotes} from "../../storybook-mocks/constants";
import useStyles from "../../../global-styles";
import SalesArea from "../../atoms/Sales/SalesArea";
import {NoteProps} from "../../atoms/Note/Note";
import Button from "@material-ui/core/Button";
import NewNote from "../../atoms/Note/NewNote";
import {GlobalContext} from "../../../common/GlobalContext";

interface LibraryDetailProps {
    library: Library;
}

interface p {
    libraryId: string;
}

function ViewLibrary() {
    // todo - consult with aaron, there's probably a better way to do this
    const {currentLibrary} = useContext(GlobalContext)
    const {content, alignToDrawer, padBottom} = useStyles()
    const {libraryId}: p = useParams()
    const {totalSales, lastSale} = currentLibrary
    let history = useHistory();

    function onBack(): void {
        history.goBack();
    }

    function onEdit(library: Library): void {
        console.log('on edit clicked...');
        history.push(`/library/${libraryId}/edit`)
    }

    function submitNewNote(note: NoteProps) {
        alert("new note submitted")
    }

    return (
        <div
            className={alignToDrawer}
        >
            <Button onClick={onBack}>Back</Button>
            <Button onClick={() => onEdit(currentLibrary)}>Edit</Button>
            <ContactDrawer library={currentLibrary}/>
            <main className={content}>
                <div className={padBottom}>
                    <SalesArea totalSales={totalSales} lastSale={lastSale}/>
                </div>
                <div className={padBottom}>
                    <NewNote/>
                </div>
                <NoteList notes={newNotes}/>
            </main>
        </div>
    );
}

export default ViewLibrary;
