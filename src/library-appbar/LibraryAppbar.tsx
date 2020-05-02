import React from "react";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";

function LibraryAppbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3">Libraries</Typography>
        <Button>Create</Button>
        <Button>View</Button>
      </Toolbar>
    </AppBar>
  );
}

export default LibraryAppbar;
