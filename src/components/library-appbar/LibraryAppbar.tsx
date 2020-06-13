import React from "react";
import {AppBar, Button, Toolbar} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import useStyles from "../../global-styles";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {AccountCircle} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid/Grid";

function LibraryAppbar() {
    let history = useHistory();
    const {appBarItem, appHeader} = useStyles()

    function handleMenu(event: any): void {
        console.log("handle menu event:", event)
    }

    return (
        <Grid container justify="center">
            <AppBar position="static" className={appHeader}>
                <Toolbar>
                    {/* Break out into it's own component */}
                    {/* Could even set the size to be [Num elements / 12] */}
                    <Grid item xs={3}>
                        <Button color="inherit" className={appBarItem}>Dashboard</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button color="inherit" className={appBarItem}>Libraries</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button color="inherit" className={appBarItem}>Create Library</Button>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item xs={3} >
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    {/*<Typography variant="h3">Dashboard</Typography>*/}
                    {/*<Typography variant="h3">Libraries</Typography>*/}
                    {/*<Typography variant="h3" onClick={route} className={appHeader}>Create</Typography>*/}
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default LibraryAppbar;
