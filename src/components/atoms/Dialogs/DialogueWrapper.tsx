import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
    isOpen: boolean
    handleClose(): void
    children: React.ReactNode
}

export default function ({isOpen, handleClose, children}: Props) {
    return (
        <div>
            <Dialog
                style={{height: "100%", width: "100%"}}
                open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Schedule Next Appointment</DialogTitle>
                <DialogContent>
                    {children}
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
