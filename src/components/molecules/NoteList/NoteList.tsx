import React from 'react'
import Note, {NoteProps} from "../../atoms/Note/Note";
import useStyles from "../../../global-styles";

type NoteListProps = {
    notes: NoteProps[]
}

export default function({notes}: NoteListProps){
    const {padBottom} = useStyles()
    return (
        <>
            {
                notes.map((props: NoteProps, index: number) =>
                    <div key={index} className={padBottom}>
                        <Note {...props}/>
                    </div>
                )
            }
        </>
    )
}