import React from 'react'
import CustomTextField from "../atoms/TextField/CustomTextField";
import Contact from "../../model/contact";
import User from "../../model/user";
import Sale from "../../model/sale";
import EmailTextField from "../atoms/TextField/EmailTextField";

type CreateLibraryProps = {}

export default function CreateLibrary() {
//     {label: 'Library', name: 'library', validate:true},
//     {label: 'State', name: 'state', validate:true},
//     {label: 'County', name: 'county', validate:true},
//     {label: 'District', name: 'district', validate:true},
//     {label: 'Librarian', name: 'librarian', validate:true},
//     {label: 'Assistant', name: 'assistant'},
//     {label: 'Address', name: 'address', validate:true},
//     {label: 'Email', name: 'email'},
//     {label: 'Phone', name: 'phone', validate:true},
//     {label: 'Extension', name: 'extension'},
//     // TODO - this should be a dropdown of all available sales reps in users
//     {label: 'Sales Rep', name: 'sales_rep', validate:true},
//     {label: 'Level', name: 'level'},
//     {label: 'Size', name: 'size'},
//     // TODO - this should be a calendar date
//     {label: 'Contact Next', name: 'next_contact_date'},
//
// public address: string;
// public id: string;
// public libraryName: string;
// public notes: string;
// public level: string;
// public city: string;
// public zip: string;
// public state: string;
// public county: string;
// public contact: Contact;
// public salesRep: User;
// public sales: Sale[];

const librarianFields = [
    {
        label: "Library Name",
        isRequired: true,
    },
    {
        label: "Address",
        isRequired: true,
    },
    {
        label: "Level",
        isRequired: true,
    },
    {
        label: "City",
        isRequired: true,
    },
    {
        label: "County",
        isRequired: true,
    },
    {
        label: "Zip",
        isRequired: true,
    },
    {
        label: "State",
        isRequired: true,
    },
    {
        label: "First Name",
        isRequired: true,
    },
    {
        label: "Phone Number",
        isRequired: true,
    },
    {
        label: "Library Name",
        isRequired: true,
    },
    {
        label: "Library Name",
        isRequired: true,
    },

]

    return (
        <>
            {librarianFields.map(( {label, isRequired} ) =>
                <CustomTextField name={label} isRequired={isRequired}/>)}
            <EmailTextField/>
        </>
    )
}
