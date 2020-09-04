import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import React, {useContext} from "react";
import {isEqual} from 'lodash'
import {GlobalContext, initialMState as initialMessageState} from "../../../common/GlobalContext";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function () {
    const {doggie, setdoggie} = useContext(GlobalContext)
    const isOpen: boolean = !isEqual(doggie.message, initialMessageState.message)

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setdoggie(initialMessageState);
    };

    return (
        <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={doggie.severity}>
                {doggie.message}
            </Alert>
        </Snackbar>
    );
}
