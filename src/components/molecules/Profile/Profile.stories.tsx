import React from "react";
import Profile from "./Profile";
import MockProviders from "../../storybook-mocks/MockProviders";

export default {
    title: "Molecules/Profile"
};

export const withProps = () =>
    <MockProviders><Profile/></MockProviders>
