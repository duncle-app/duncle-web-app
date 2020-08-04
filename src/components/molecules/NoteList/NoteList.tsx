import React from 'react'
import EditableNote from "../../atoms/Note/EditableNote";
import useStyles from "../../../global-styles";
import NoteDAO from "../../../model/noteDAO";

type NoteListProps = {
    notes: NoteDAO[];
    SubmitForm(values: NoteDAO): any;
}

export default function ({notes, SubmitForm}: NoteListProps) {
    const {padBottom} = useStyles()
    return (
        <>
            {!!notes &&
            notes.map((props: NoteDAO, index: number) =>
                <div key={index} className={padBottom}>
                    {/* @ts-ignore */}
                    <EditableNote SubmitForm={SubmitForm} {...props}/>
                </div>
            )
            }
        </>
    )
}