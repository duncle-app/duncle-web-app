import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from "@material-ui/core/Typography";
import {TextField} from "@material-ui/core";
import moment from "moment";

interface Props {
    isOpen: boolean
    handleClose(): void
}

export default function({isOpen, handleClose}: Props) {
    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Schedule Next Appointment</DialogTitle>
                <DialogContent>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        <strong>Cancel</strong>
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        <strong>Schedule</strong>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
