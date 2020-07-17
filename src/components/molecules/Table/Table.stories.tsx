import React from "react";
import Table from "./Table"
import Library from "../../../model/library";
import {newLibrary, newLibrary2} from "../../storybook-mocks/constants";

export default {
    title: "Molecules/Table",
    component: Table,
};

const tableColumns = [
    {title: "Library", field: "libraryName"},
    {title: "City", field: "city"},
    {
        title: "Contact",
        field: "contactName",
        render: (rowData: Library) => `${rowData.librarian}`
    },
    {title: "Phone", field: "phoneNumber"}
];


export const withProps = () => (
    <Table columns={tableColumns} libraries={[newLibrary, newLibrary2]}/>
);
