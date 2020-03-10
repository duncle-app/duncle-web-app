import React from 'react'
import {Library} from "../../model/library";

interface AddLibraryProps {
    onCancel(): void,
    onSubmit(library: Library): void
}

function AddLibrary(props: AddLibraryProps) {


    return (
        <div>
            <div><button onClick={props.onCancel}>x</button></div>
            <div><input placeholder={'name'}/></div>
            <div><input placeholder={'id'}/></div>
            <div><button onClick={()=> props.onSubmit(new Library('',''))}>Submit</button></div>
        </div>
    )
}

export default AddLibrary
