import React from "react";
import NoteList from "./NoteList"
import {NoteProps} from "../../atoms/Note/Note";
import {newNotes} from "../../storybook-mocks/constants";

export default {
    title: "Molecules/NoteList",
    component: NoteList,
};

const notes: NoteProps[] = newNotes
export const withProps = () =>
    <NoteList notes={notes}/>