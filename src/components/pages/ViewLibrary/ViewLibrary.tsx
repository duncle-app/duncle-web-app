import React, {useContext, useEffect, useState} from "react";
import Library from "../../../model/library";
import ContactDrawer from "../../atoms/ContactDrawer/ContactDrawer";
import {useHistory, useParams} from "react-router-dom";
import NoteList from "../../molecules/NoteList/NoteList";
import useStyles from "../../../global-styles";
import SalesArea from "../../atoms/Sales/SalesArea";
import Button from "@material-ui/core/Button";
import NewNote from "../../atoms/Note/NewNote";
import {GlobalContext} from "../../../common/GlobalContext";
import {editNote, saveNote} from "../../../services/NoteService";
import NoteDAO from "../../../model/noteDAO";
import {NoLibrary} from "../../storybook-mocks/constants";

interface LibraryDetailProps {
    library: Library;
}

interface p {
    libraryId: string;
}

function ViewLibrary() {
    // todo - consult with aaron, there's probably a better way to do this
    const {currentLibrary, setCurrentLibrary} = useContext(GlobalContext)
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

    async function submitNewEditableNote(note: NoteDAO) {
        console.log("submitting editable note", note)
        const updatedLibrary: Library = await editNote(currentLibrary, note)
        console.log("log for me", updatedLibrary)
        jankUpdateLibrary(updatedLibrary);
    }

    // @ts-ignore
    async function submitNewNote({newNote: message}) {
        console.log("submitting new note", message)
        const updatedLibrary: Library = await saveNote(currentLibrary, message, "Terry")
        console.log("updatedlib after saving", updatedLibrary)

        jankUpdateLibrary(updatedLibrary)
    }

    function jankUpdateLibrary(updatedLibrary: Library) {
        // todo - this ain't right.. this is needed, otherwise - see below note
        setCurrentLibrary(NoLibrary)
        // todo - not sure why.. but when this renders, it duplicates the note at the bottom instead of adding a new note to the top..
        setCurrentLibrary(updatedLibrary)
    }

    function sortLatestComesFirst(notes: NoteDAO[]) {
        console.log("notes being sorted", notes)
        notes.sort(function (a, b) {
            var keyA = new Date(a.dateCreated),
                keyB = new Date(b.dateCreated);
            // Compare the 2 dates
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
        });
    }

    return (
        <div className={alignToDrawer}>
            <Button onClick={onBack}>Back</Button>
            <Button onClick={() => onEdit(currentLibrary)}>Edit</Button>
            <ContactDrawer library={currentLibrary}/>
            <main className={content}>
                <div className={padBottom}>
                    <SalesArea totalSales={totalSales} lastSale={lastSale}/>
                </div>
                <div className={padBottom}>
                    <NewNote formSubmit={submitNewNote}/>
                </div>
                <NoteList notes={currentLibrary.notes} SubmitForm={submitNewEditableNote}/>
            </main>
        </div>
    );
}

export default ViewLibrary;
