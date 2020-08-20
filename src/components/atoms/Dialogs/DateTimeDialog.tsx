import React from 'react'
import DialogueWrapper, {DialogProps} from "./DialogueWrapper";
import {DialogContentText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

export default (props: DialogProps) =>
    <DialogueWrapper {...props}>
        <DialogContentText>
            Librarian: Nancy Torvald
        </DialogContentText>
        <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue={moment().format('yyyy-MM-DD[T]HH:mm')}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </DialogueWrapper>
