import React from 'react'
import LibraryEdit from "../library-edit/components";
import {Library} from "../../model";
import {NoLibrary} from "../storybook-mocks/constants";

export default function test() {
    return <LibraryEdit library={NoLibrary}/>
}
