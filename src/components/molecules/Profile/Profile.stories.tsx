import React, { useContext } from "react";
import Profile from "./Profile";

export default {
  title: "Molecules/Profile",
};

const mockHandler = () => console.log("Logging out!");

export const SignedOut = () => <Profile />;

export const SignedIn = () => <Profile />;
