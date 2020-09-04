import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import React, {useContext} from "react";
import {GlobalContext, initialState as initialMessageState} from "../../../common/GlobalContext";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function () {
    const {message, setMessage, doggie} = useContext(GlobalContext)

    console.log({doggie})

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setMessage(initialMessageState);
    };

    return (
        <Snackbar open={doggie.message !== initialMessageState} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={doggie.severity}>
                {doggie.message}
            </Alert>
        </Snackbar>
    );
}
