import React from "react";
import Note from "./Note"
import {dateNowIso, readableDate} from "../../../utils/dateUtil";
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: "Atoms/Note",
    component: Note,
};
const date = readableDate(dateNowIso())

export const withProps = () =>
    <Note
        message="Sally wasn't feeling so great. I had to give her the people's elbow and show her what real pain looks like"
        author="Mr. Sir"
        dateCreated={date}
    />