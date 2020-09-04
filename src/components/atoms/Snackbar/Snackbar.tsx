import React from 'react'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import MuiSnackbar from "@material-ui/core/Snackbar";
import {GlobalContext} from "../../../common/GlobalContext";

export default function useSuccessSnackbar() {
    const {message, setMessage} = React.useContext(GlobalContext)
    console.log("Hook text", message)

    return {
        message,
        setSnackbarMessage: (msg: string) => setMessage(msg),
        clearMessage: () => setMessage('')
    }
};

interface Props {
    text: string
    severity: 'error' | 'warning' | 'info' | 'success'
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function Snackbar({text, severity}: Props) {
    const {message, setMessage} = React.useContext(GlobalContext)

    console.log("Snackbar text", text)
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setMessage('')
    };

    return (
        <>
            <MuiSnackbar open={true} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </MuiSnackbar>
        </>
    );
}
