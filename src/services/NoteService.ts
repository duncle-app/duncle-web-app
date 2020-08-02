import Library from "../model/library";
import {dateNowIso} from "../utils/dateUtil";
import NoteDAO from "../model/noteDAO";

type NoteServiceProps = {}

export default class NoteService {

    static editNote(library: Library, note: NoteDAO) {
        library.dateUpdated = dateNowIso()
        note.dateCreated = dateNowIso()

        library.notes = library.notes?.map(n => n.id === note.id ? note : n);

        console.log("library notes", library.notes)
    }
}

