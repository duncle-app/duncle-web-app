import React from 'react'
import LibraryEdit from "../library-edit/components";
import {Library} from "../../model";

export default function test() {
    return <LibraryEdit library={Library.None}/>
}
