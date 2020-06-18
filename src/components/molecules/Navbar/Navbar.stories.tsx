import React from "react";
import Navbar from "./Navbar"
import {BrowserRouter} from "react-router-dom";

export default {
    title: "Molecules/Navbar",
    component: Navbar,
};


export const withProps = () => (
    <BrowserRouter>
        <Navbar/>
    </BrowserRouter>
);