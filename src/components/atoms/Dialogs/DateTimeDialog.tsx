import React from 'react'
import DialogueWrapper from "./DialogueWrapper";
import {DialogContentText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

export default () =>
    <DialogueWrapper isOpen={true} handleClose={() => console.log("mr sir")}>
        <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
        </DialogContentText>
        <Typography variant="h6" gutterBottom>
            Librarian
        </Typography>
        <Typography variant="body1" gutterBottom>
            Nancy
        </Typography>
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
