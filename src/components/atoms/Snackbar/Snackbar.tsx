import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import React, { useContext } from "react";
import { isEqual } from "lodash";
import {
  GlobalContext,
  initialState as initialMessageState,
} from "../../../common/GlobalContext";

export function useNotification() {
  const { setMessage } = useContext(GlobalContext);

  return {
    setSuccess: (newMessage: string) =>
      setMessage({ message: newMessage, severity: "success" }),
    setInfo: (newMessage: string) =>
      setMessage({ message: newMessage, severity: "info" }),
    setError: (newMessage: string) =>
      setMessage({ message: newMessage, severity: "error" }),
    clearMessage: () => setMessage(initialMessageState),
  };
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function () {
  const { message } = useContext(GlobalContext);
  const { clearMessage } = useNotification();

  const isOpen: boolean = !isEqual(
    message.message,
    initialMessageState.message
  );

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    // todo - a bug where if anything other than success, it flashes green for a split second
    clearMessage();
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={4500} onClose={handleClose}>
      <Alert onClose={handleClose} severity={message.severity}>
        {message.message}
      </Alert>
    </Snackbar>
  );
}
