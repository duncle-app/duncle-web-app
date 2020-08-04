import Library from "../model/library";
import {dateNowIso} from "../utils/dateUtil";
import NoteDAO from "../model/noteDAO";
import {useLibraryPouch} from "../common/hooks/UsePouch";

const {getLibrary, saveLibrary} = useLibraryPouch()

export async function editNote(library: Library, note: NoteDAO) {
    library.dateUpdated = dateNowIso()
    note.dateCreated = dateNowIso()

    library.notes = library.notes?.map(n => n.id === note.id ? note : n);
    // todo save here

    const response = await saveLibrary(library)

    console.log("library notes", library.notes)
}

export async function saveNote(library: Library, message: string, author: string): Promise<Library> {
    library.dateUpdated = dateNowIso()
    const newSavedNote: NoteDAO = {
        message,
        dateCreated: dateNowIso(),
        author
    }
    library.notes.unshift(newSavedNote)
    // todo save here
    try {
        const response = await saveLibrary(library)
        console.log("response from saving new note", response)
        return await getLibrary(library._id)
    } catch (e) {
        throw new Error(`Error: ${e}`)
    }
}

