import React from 'react';
import {Library} from "../../model/library";
import {Sale} from "../../model/sale";

interface LibraryDetailProps {
    library: Library,
    onBack(): void,
    onEdit(library: Library): void,
    onNewSales(sale: Sale): void
}

function LibraryDetail(props: LibraryDetailProps) {
    let salesTotal = 0;
    return (
        <div>
            <div>
                <button onClick={props.onBack}>Back</button>
                <button onClick={() => props.onEdit(props.library)}>Edit</button>
            </div>
            <h2>{props.library.libraryName}</h2>
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

            <h2>Sales</h2>
            <div>Total: {props.library.sales.forEach(x => salesTotal+=x.amount)}</div>
            <div><button onClick={() => props.onNewSales(new Sale(55,'this is fantastic', props.library.id))}>+</button></div>
        </div>
    )
}

export default LibraryDetail;
