import React from 'react';
import {Library} from "../../model/library";

interface LibraryDetailProps {
    library: Library,
    onBack() : void
}

function LibraryDetail(props: LibraryDetailProps) {
    return (
        <div>
            <div>
                <button onClick={props.onBack}>Back</button>
            </div>
            <h2>{props.library.name}</h2>
            <div>Address: {props.library.address}</div>
            <div>City: {props.library.city}</div>
            <div>State: {props.library.state}</div>
            <div>Zip: {props.library.zip}</div>
            <div>County: {props.library.county}</div>

            <h3>School info:</h3>
            <div>Level: {props.library.level}</div>
            <div>Size: {props.library.size}</div>

            <h2>Contact</h2>
            <div>Name: {props.library.contact.firstName} {props.library.contact.lastName}</div>
            <div>Phone: {props.library.contact.phoneNumber}</div>
            <div>Email: {props.library.contact.emailAddress}</div>

            <h2>Notes</h2>
            <div>{props.library.notes}</div>
        </div>
    )
}

export default LibraryDetail;
