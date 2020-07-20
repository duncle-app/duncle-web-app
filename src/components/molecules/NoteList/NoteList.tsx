import React from 'react'
import Note, {NoteProps} from "../../atoms/Note/Note";

type NoteListProps = {
    notes: NoteProps[]
}

export default ({notes}: NoteListProps) => (
    <>
        {
            notes.map((props) => <Note {...props}/>)
        }
    </>
)
