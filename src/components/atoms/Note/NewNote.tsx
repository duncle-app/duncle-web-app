import React from 'react'
import Form from "../../../common/Form";
import {Paper} from "@material-ui/core";
import TextArea from "../TextArea/TextArea";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from "@material-ui/core/Button";

interface props {
    // @ts-ignore
    formSubmit(props): any
}

export default function ({formSubmit}: props) {
    return <Form onSubmit={formSubmit}>
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
