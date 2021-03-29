import NoteDAO from "../../model/noteDAO";
import Library from "../../model/library";
import userDAO from "../../model/userDAO";
import UserDAO from "../../model/userDAO";
import { newLibrary2 } from "../../components/storybook-mocks/constants";
import { dateNowIso, readableDate } from "../../utils/dateUtil";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import event from "../../model/event";
import { addSaleInputProps } from "../../components/atoms/Sales/SalesArea";
import { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import useAuth from "./Auth/useAuth";
import { useLibraryPouch, useUserPouch } from "./UsePouch";
import { useNotification } from "../../components/atoms/Snackbar/Snackbar";
import useSaveLibraryQuery from "../queries/useSaveLibraryQuery";

export default () => {
  const { currentLibrary, setCurrentLibrary } = useContext(GlobalContext);
  const { authenticate, getAuthenticatedUser } = useAuth();

  const { mutate: saveLibrary } = useSaveLibraryQuery();
  const { updateUser } = useUserPouch();

  const { setSuccess, setError } = useNotification();

  async function submitNewEditableNote(note: NoteDAO) {
    console.log("submitting editable note", note);
    editNote(currentLibrary, note);
    // todo - add logic to auto render the new component from RQ instead of calling this
    // console.log("log for me", updatedLibrary);
    // jankUpdateLibrary(updatedLibrary);
  }

  // @ts-ignore
  async function submitNewNote({ newNote: message }) {
    const { firstName }: userDAO = await getAuthenticatedUser();
    saveNote(currentLibrary, message, firstName);
  }

  function jankUpdateLibrary(updatedLibrary: Library) {
    // todo - amazing challenge question because this ain't right.. this is needed, otherwise - see below note
    setCurrentLibrary(newLibrary2);
    // todo - not sure why.. but when this renders, it duplicates the note at the bottom instead of adding a new note to the top..
    setCurrentLibrary(updatedLibrary);
  }

  async function editNote(library: Library, note: NoteDAO) {
    library.dateUpdated = dateNowIso();
    note.dateCreated = dateNowIso();

    library.notes = library.notes.map((n) => (n.id === note.id ? note : n));
    console.log("library notes", library.notes);

    saveLibrary(library);
  }

  function saveNote(
    { notes, ...rest }: Library,
    message: string,
    author: string
  ): void {
    const newSavedNote: NoteDAO = {
      id: uuidv4(),
      message,
      dateCreated: dateNowIso(),
      author,
    };

    const newLibrary = {
      notes: [newSavedNote, ...notes],
      ...rest,
      dateUpdated: dateNowIso(),
    };

    saveLibrary(newLibrary);
  }

  /**
   * Just logs the date to contacted, and nothing else
   */
  const handleContactedToday = async () => {
    try {
      currentLibrary.dateLastContact = dateNowIso();
      // @ts-ignore
      const { rev } = await saveLibrary(currentLibrary);
      currentLibrary._rev = rev;
      jankUpdateLibrary(currentLibrary);
      setSuccess("Successfully saved library");
    } catch (e) {
      setError(e);
    }
  };

  function sortLatestComesFirst(notes: NoteDAO[]) {
    console.log("notes being sorted", notes);
    notes.sort(function (a, b) {
      var keyA = new Date(a.dateCreated),
        keyB = new Date(b.dateCreated);
      // Compare the 2 dates
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
  }

  // @ts-ignore
  async function handleNewAppointment({ nextAppointment }) {
    const newId = uuidv4();
    const startDate = nextAppointment;
    // 2 hours later
    const endDate = moment(nextAppointment).add(2, "hours").format();
    const now = dateNowIso();

    const newEvent: event = {
      id: newId,
      title: `Appointment with ${currentLibrary.librarian} at ${currentLibrary.libraryName}`,
      start: startDate,
      end: endDate,
      libraryId: currentLibrary._id,
      hasContacted: false,
      dateCreated: now,
      dateUpdated: now,
    };

    const currentUser: UserDAO = await getAuthenticatedUser();

    try {
      // todo - find out how to reuse this code (see Calendar.tsx:64)
      //  calling hooks inside a service function is a no-no :(
      //  create a new hook to do this for you
      //  i.e. const {update} = useEventService() ... update(newEvent)
      const response = await updateUser(currentUser);
      currentUser._rev = response.rev;
      currentUser.events.push(newEvent);
      authenticate(currentUser);
      setSuccess(
        `Successfully added appointment for: ${readableDate(startDate)}`
      );
    } catch (e) {
      setError(`Unable to add appointment: ${e}`);
    }
  }

  const addSale = async (newSale: number, library: Library) => {
    debugger;
    // subtract 7% for S&H
    const withShippingAndHandling: number = newSale * 0.93;
    const withNewSale: number = library.totalSales + withShippingAndHandling;

    library.lastSale = withShippingAndHandling;
    library.totalSales = withNewSale;

    console.log({ library });
    saveLibrary(library);
    setSuccess(`Success! The total after S&H is ${withShippingAndHandling}`);

    // todo - add "undo last sale" button?
  };

  return {
    submitNewEditableNote,
    submitNewNote,
    handleNewAppointment,
    addSale,
  };
};
