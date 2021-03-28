import React, { useContext, useState } from "react";
import Library from "../../../model/library";
import ContactDrawer from "../../elements/ContactDrawer/ContactDrawer";
import { useHistory, useParams } from "react-router-dom";
import NoteList from "../../elements/NoteList/NoteList";
import useStyles from "../../../global-styles";
import SalesArea, { addSaleInputProps } from "../../atoms/Sales/SalesArea";
import NewNote from "../../atoms/Note/NewNote";
import { GlobalContext } from "../../../common/GlobalContext";
import NoteDAO from "../../../model/noteDAO";
import { newLibrary2, NoLibrary } from "../../storybook-mocks/constants";
import { useLibraryPouch, useUserPouch } from "../../../common/hooks/UsePouch";
import userDAO from "../../../model/userDAO";
import UserDAO from "../../../model/userDAO";
import { useNotification } from "../../atoms/Snackbar/Snackbar";
import { dateNowIso, readableDate } from "../../../utils/dateUtil";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@material-ui/core";
import DefaultButton from "../../atoms/Button/DefaultButton";
import event from "../../../model/event";
import moment from "moment";
import useAuth from "../../../common/hooks/Auth/useAuth";

interface p {
  libraryId: string;
}

function ViewLibrary() {
  const { currentLibrary, setCurrentLibrary } = useContext(GlobalContext);
  const { authenticate, getAuthenticatedUser } = useAuth();
  const { content, alignToDrawer, paddingOne, paddingTopTiny } = useStyles();

  const [totalSales, setTotalSales] = useState<number>(
    currentLibrary.totalSales
  );
  const [lastSale, setlastSale] = useState<number>(currentLibrary.lastSale);
  const { saveLibrary } = useLibraryPouch();
  const { updateUser } = useUserPouch();

  const { setSuccess, setError } = useNotification();

  const { libraryId }: p = useParams();
  let history = useHistory();

  function onBack(): void {
    history.goBack();
  }

  if (currentLibrary === NoLibrary) {
    onBack();
  }

  function onEdit(id: string): void {
    history.push(`/library/${id}/edit`);
  }

  async function submitNewEditableNote(note: NoteDAO) {
    console.log("submitting editable note", note);
    const updatedLibrary: Library = await editNote(currentLibrary, note);
    console.log("log for me", updatedLibrary);
    jankUpdateLibrary(updatedLibrary);
  }

  // @ts-ignore
  async function submitNewNote({ newNote: message }) {
    const { firstName }: userDAO = await getAuthenticatedUser();
    const updatedLibrary: Library = await saveNote(
      currentLibrary,
      message,
      firstName
    );
    jankUpdateLibrary(updatedLibrary);
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

    return await saveLibrary(library);
  }

  async function saveNote(
    { notes, ...rest }: Library,
    message: string,
    author: string
  ): Promise<Library> {
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

    return await saveLibrary(newLibrary);
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

  const addSale = async ({ newSale }: addSaleInputProps) => {
    // subtract 7% for S&H
    const withShippingAndHandling: number = newSale * 0.93;
    const withNewSale: number = totalSales + withShippingAndHandling;

    currentLibrary.lastSale = withShippingAndHandling;
    currentLibrary.totalSales = withNewSale;

    try {
      const { _rev } = await saveLibrary(currentLibrary);
      currentLibrary._rev = _rev;
      setlastSale(currentLibrary.lastSale);
      setTotalSales(currentLibrary.totalSales);
      setSuccess(`Success! The total after S&H is ${withShippingAndHandling}`);
    } catch (e) {
      setError(`Failed to add the new sale ${e}`);
    }

    // todo - add "undo last sale" button?
  };

  return (
    <div className={alignToDrawer}>
      <div className={paddingTopTiny}>
        <DefaultButton onClick={onBack}>Back</DefaultButton>
        <DefaultButton onClick={() => onEdit(libraryId)}>Edit</DefaultButton>
      </div>
      <ContactDrawer
        library={currentLibrary}
        handleScheduleNextAppointment={handleNewAppointment}
      />
      <main className={content}>
        <Grid container>
          <Grid item xs={6}>
            <div className={paddingOne}>
              <SalesArea
                totalSales={totalSales}
                lastSale={lastSale}
                addSale={addSale}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={paddingOne}>
              <NewNote formSubmit={submitNewNote} />
            </div>
          </Grid>
        </Grid>
        <NoteList
          notes={currentLibrary.notes}
          SubmitForm={submitNewEditableNote}
        />
      </main>
    </div>
  );
}

export default ViewLibrary;
