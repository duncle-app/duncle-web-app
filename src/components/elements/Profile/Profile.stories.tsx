import React, { useContext } from "react";
import Profile from "./Profile";

export default {
  title: "Elements/Profile",
};

const mockHandler = () => console.log("Logging out!");

export const SignedOut = () => <Profile />;

export const SignedIn = () => <Profile />;
