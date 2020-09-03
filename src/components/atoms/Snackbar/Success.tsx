import React from 'react'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar";
import {capitalize} from 'lodash'

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {
    severity: 'error' | 'warning' | 'info' | 'success'
}

export default function ({severity}: Props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClick}>
                Open snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {capitalize(severity)} message!
                </Alert>
            </Snackbar>
        </>
    );
}
