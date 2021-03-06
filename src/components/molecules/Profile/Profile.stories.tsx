import React, {useContext} from "react";
import Profile from "./Profile";

export default {
    title: "Molecules/Profile"
};

const handler = () => console.log('Logging out!')

export const SignedOut = () =>
    <Profile isAuthenticated={false} signOutHandler={handler}/>

export const SignedIn = () =>
    <Profile isAuthenticated={true} signOutHandler={handler}/>
