import React from "react";
import NoteList from "./NoteList";
import { newNotes } from "../../storybook-mocks/constants";
import NoteDAO from "../../../model/noteDAO";

export default {
  title: "Molecules/NoteList",
  component: NoteList,
};

const notes: NoteDAO[] = newNotes;
export const withProps = () => (
  <NoteList
    notes={notes}
    SubmitForm={(note) => alert(`Submitted ${note.message}`)}
  />
);
