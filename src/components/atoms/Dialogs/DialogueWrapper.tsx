import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

interface WrapperProps extends DialogProps{
    children: React.ReactNode
}

export interface DialogProps {
    isOpen: boolean
    handleSubmit(): void
    handleCancel(): void
}

// make more dynamic - https://dev.to/dmtrkovalenko/the-neatest-way-to-handle-alert-dialogs-in-react-1aoe
export default ({isOpen, handleSubmit, handleCancel, children}: WrapperProps) => {
    return (
        <div>
            <Dialog
                style={{height: "100%", width: "100%"}}
                open={isOpen} onClose={handleSubmit} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Schedule Next Appointment</DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        <strong>Cancel</strong>
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        <strong>Schedule</strong>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
