import React, {useContext} from "react";
import ViewLibrary from "./ViewLibrary"
import {BrowserRouter as Router} from "react-router-dom";
import {newLibrary} from "../../storybook-mocks/constants";
import {GlobalContext} from "../../../common/GlobalContext";

export default {
    title: "Pages/ViewLibrary",
    component: ViewLibrary,
};

export const withProps = () => (
    <GlobalContext.Provider value={{currentLibrary: newLibrary}}>
        <Router>
            <ViewLibrary/>
        </Router>
    </GlobalContext.Provider>
)
