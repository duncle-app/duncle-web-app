import React from "react";
import Table from "./Table"
import {newLibrary, newLibrary2} from "../../storybook-mocks/constants";

export default {
    title: "Molecules/Table"
};

export const withProps = () => (
    <Table libraries={[newLibrary, newLibrary2]}/>
);
