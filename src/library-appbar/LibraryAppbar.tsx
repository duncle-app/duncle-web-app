import React from "react";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import {useHistory} from "react-router-dom";

function LibraryAppbar() {
    let history = useHistory();

    console.log(history);

    function route() {
        history.push(`/library/create`);
    }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3">Libraries</Typography>
        <Button onClick={route}>Create</Button>
        <Button>View</Button>
      </Toolbar>
    </AppBar>
  );
}

export default LibraryAppbar;
