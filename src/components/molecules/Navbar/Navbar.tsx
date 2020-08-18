import React, {useState} from 'react';
import {AppBar, Tabs, Tab, Typography, Box} from "@material-ui/core";
import useStyles from "../../../global-styles";
import { useHistory } from 'react-router-dom';

type NavbarProps = {
    name: string;
    route: string;
}

export default function Navbar() {
    const {appHeader, horizontalListItem} = useStyles()
    const navbarTabs: NavbarProps[] = [
        {name: "Dashboard", route: "/dashboard"},
        {name: "All Libraries", route: "/library",},
        {name: "Add Library", route: "/library/new"}
    ]

    const [currentTab, setCurrentTab] = useState(0);
    const history = useHistory();

    const handleChange = (event: any, newValue: number) => {
        setCurrentTab(newValue)
        history.push(navbarTabs[newValue].route);
    };

    return (
        <>
            <AppBar position="static">
                <Tabs value={currentTab} onChange={handleChange} centered>
                    {navbarTabs.map(({name}) => (
                        <Tab key={name} label={name}/>
                    ))}
                </Tabs>
            </AppBar>
        </>
    );
}
