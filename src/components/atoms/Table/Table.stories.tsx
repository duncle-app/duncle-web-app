import React from "react";
import Table from "./Table"
import Library from "../../../model/library";
import {newLibrary, newLibrary2} from "../../storybook-mocks/constants";

export default {
    title: "Atoms/Table",
    component: Table,
};

const tableColumns = [
    {title: "Library", field: "libraryName"},
    {
        title: "Contact",
        field: "contactName",
        render: (rowData: Library) => `${rowData.contact.librarian}`
    },
    {title: "Phone", field: "contact.phoneNumber"}
];


export const withProps = () => (
    <Table columns={tableColumns} libraries={[newLibrary, newLibrary2]}/>
);