import React, { useContext } from "react";
import Profile from "./Profile";

export default {
  title: "Molecules/Profile",
};

const mockHandler = () => console.log("Logging out!");

export const SignedOut = () => (
  <Profile isAuthenticated={false} signOutHandler={mockHandler} />
);

export const SignedIn = () => (
  <Profile isAuthenticated={true} signOutHandler={mockHandler} />
);
