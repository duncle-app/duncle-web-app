import React, {useContext, useState} from "react";
import Library from "../../../model/library";
import ContactDrawer from "../../atoms/ContactDrawer/ContactDrawer";
import {useHistory, useParams} from "react-router-dom";
import NoteList from "../../molecules/NoteList/NoteList";
import useStyles from "../../../global-styles";
import SalesArea, {addSaleInputProps} from "../../atoms/Sales/SalesArea";
import Button from "@material-ui/core/Button";
import NewNote from "../../atoms/Note/NewNote";
import {GlobalContext} from "../../../common/GlobalContext";
import NoteDAO from "../../../model/noteDAO";
import {NoLibrary} from "../../storybook-mocks/constants";
import {useLibraryPouch} from "../../../common/hooks/UsePouch";
import userDAO from "../../../model/userDAO";
import {useNotification} from "../../atoms/Snackbar/Snackbar";
import {dateNowIso} from "../../../utils/dateUtil";
import {v4 as uuidv4} from "uuid";

interface p {
    libraryId: string;
}

function ViewLibrary() {
    // todo - consult with aaron, there's probably a better way to do this
    const {currentLibrary, setCurrentLibrary, getAuthenticatedUser} = useContext(GlobalContext)
    const {content, alignToDrawer, paddingOne, paddingTopTiny} = useStyles()

    const [totalSales, setTotalSales] = useState<number>(currentLibrary.totalSales)
    const [lastSale, setlastSale] = useState<number>(currentLibrary.lastSale)
    const {getLibrary, saveLibrary} = useLibraryPouch()

    const {setSuccess, setError} = useNotification()

    const {libraryId}: p = useParams()
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
        const {firstName}: userDAO = await getAuthenticatedUser()
        const updatedLibrary: Library = await saveNote(currentLibrary, message, firstName)
        jankUpdateLibrary(updatedLibrary)
    }

    function jankUpdateLibrary(updatedLibrary: Library) {
        // todo - this ain't right.. this is needed, otherwise - see below note
        setCurrentLibrary(NoLibrary)
        // todo - not sure why.. but when this renders, it duplicates the note at the bottom instead of adding a new note to the top..
        setCurrentLibrary(updatedLibrary)
    }

    async function editNote(library: Library, note: NoteDAO) {
        library.dateUpdated = dateNowIso()
        note.dateCreated = dateNowIso()

        library.notes = library.notes.map(n => n.id === note.id ? note : n);
        console.log("library notes", library.notes)

        return await safeSaveLibrary(library)
    }

    async function saveNote(library: Library, message: string, author: string): Promise<Library> {
        library.dateUpdated = dateNowIso()
        const newSavedNote: NoteDAO = {
            id: uuidv4(),
            message,
            dateCreated: dateNowIso(),
            author
        }
        library.notes.unshift(newSavedNote)
        return await safeSaveLibrary(library);
    }

    async function safeSaveLibrary(library: Library) {
        try {
            const response = await saveLibrary(library)
            console.log("response from saving new note", response)
            return await getLibrary(library._id)
        } catch (e) {
            throw new Error(`Error: ${e}`)
        }
    }

    const handleNoSale = async () => {
        try {
            currentLibrary.dateLastContact = dateNowIso()
            // @ts-ignore
            const {rev} = await saveLibrary(currentLibrary);
            currentLibrary._rev = rev
            jankUpdateLibrary(currentLibrary)
            setSuccess('Successfully saved library')
        } catch (e) {
            setError(e)
        }

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

    const addSale = async ({newSale}: addSaleInputProps) => {
        // subtract 7% for S&H
        const withShippingAndHandling: number = newSale * .93
        const withNewSale: number = totalSales + withShippingAndHandling

        currentLibrary.lastSale = withShippingAndHandling
        currentLibrary.totalSales = withNewSale

        try {
            console.log("currentLibrary.rev before", currentLibrary._rev)
            // @ts-ignore todo - fix this stinkin type bug
            const {rev} = await saveLibrary(currentLibrary);
            console.log("currentLibrary.rev after", currentLibrary._rev)
            currentLibrary._rev = rev
            setlastSale(currentLibrary.lastSale)
            setTotalSales(currentLibrary.totalSales)
        } catch (e) {
            console.log("Failed to add the new sale", e)
            // do snackbar here, error
        }

        // todo - confirmation dialog for what the sale is

        // todo - add "undo last sale" button
    }

    return (
        <div className={alignToDrawer}>
            <div className={paddingTopTiny}>
                <Button variant='outlined' onClick={onBack}>Back</Button>
                <Button variant='outlined' onClick={() => onEdit(currentLibrary)}>Edit</Button>
            </div>
            <ContactDrawer library={currentLibrary}/>
            <main className={content}>
                <div className={paddingOne}>
                    <SalesArea totalSales={totalSales} lastSale={lastSale} addSale={addSale} handleNoSale={handleNoSale}/>
                </div>
                <div className={paddingOne}>
                    <NewNote formSubmit={submitNewNote}/>
                </div>
                <NoteList notes={currentLibrary.notes} SubmitForm={submitNewEditableNote}/>
            </main>
        </div>
    );
}

export default ViewLibrary;
