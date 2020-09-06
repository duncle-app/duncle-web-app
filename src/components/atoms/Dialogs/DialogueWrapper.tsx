import React, {ReactNode, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from "../../../common/Form";

interface WrapperProps extends DialogProps {
    children: ReactNode
}

export interface DialogProps {
    isOpen: boolean
    handleCancel(...args: any[]): any
}

// make more dynamic - https://dev.to/dmtrkovalenko/the-neatest-way-to-handle-alert-dialogs-in-react-1aoe
export default ({isOpen, handleCancel, children}: WrapperProps) => {
    return (
        <div>
            <Dialog
                style={{height: "100%", width: "100%"}}
                open={isOpen} aria-labelledby="form-dialog-title">
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        <strong>Close</strong>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
