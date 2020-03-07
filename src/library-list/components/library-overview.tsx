import React from 'react'
import {Library} from "../../model/library";

export default function LibraryOverview(props: Library) {
    return (
        <div>
            {props.name}
        </div>)
}

