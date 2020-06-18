import React from 'react'
import CustomTextField from "../atoms/TextField/CustomTextField";
import Contact from "../../model/contact";
import User from "../../model/user";
import Sale from "../../model/sale";
import EmailTextField from "../atoms/TextField/EmailTextField";

export default function CreateLibrary() {
    const librarianFields = [
        {label: "Library Name", isRequired: true,},
        {label: "Address", isRequired: true,},
        {label: "Level", isRequired: true,},
        {label: "City", isRequired: true,},
        {label: "County", isRequired: true,},
        {label: "Zip", isRequired: true,},
        {label: "State", isRequired: true,},
        {label: "Librarian", isRequired: true,},
        {label: "Phone Number", isRequired: true,},
    ]

    return (
        <>
            {librarianFields.map(({label, isRequired}) =>
                <CustomTextField name={label} isRequired={isRequired}/>)}
            <EmailTextField/>
        </>
    )
}
