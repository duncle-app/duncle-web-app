import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from "../../../global-styles";
import Grid from "@material-ui/core/Grid/Grid";
import List from "@material-ui/core/List";
import NavbarItem from "../../atoms/Navbar/NavbarItem";

type AppbarProps = {}

export default function Navbar() {
    // on handle change, do this & also history.push the new route
    // const handleChange = (event: any, newValue: number) => setCurrentTab(newValue);
    // <Tabs value={currentTab} onChange={handleChange}>


    const {appHeader, horizontalListItem} = useStyles()

    return (
        <Grid container justify="center">
            <Grid item xs={11}>
                <AppBar position="static" className={appHeader}>
                    <Toolbar>
                        <List component="nav" className={horizontalListItem}>
                            <NavbarItem displayText="Dashboard" url="/"/>
                            <NavbarItem displayText="Libraries" url="/library"/>
                            <NavbarItem displayText="Add Library" url="/library/create"/>
                        </List>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    );
}
