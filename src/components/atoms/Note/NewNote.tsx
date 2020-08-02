import React from 'react'
import Form from "../../../common/Form";
import {Paper} from "@material-ui/core";
import TextArea from "../TextArea/TextArea";
import {NoteProps} from "./EditableNote";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from "@material-ui/core/Button";

export default function () {
    function submitNewNote(note: NoteProps) {
        alert("new note submitted")
        console.log("note",note)
    }

    return <Form onSubmit={submitNewNote}>
        <Paper>
            <TextArea
                name="New Note"
                placeholderText="Enter a new note here"
            />
            <Button type="submit">
                <AddBoxIcon style={{color: "green"}}/>
            </Button>
        </Paper>
    </Form>
}
