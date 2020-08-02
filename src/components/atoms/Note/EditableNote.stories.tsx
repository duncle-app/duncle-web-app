import React from "react";
import EditableNote from "./EditableNote"
import {dateNowIso, readableDate} from "../../../utils/dateUtil";
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: "Atoms/EditableNote",
};
const date = readableDate(dateNowIso())

export const withProps = () =>
    <EditableNote
        message="Sally wasn't feeling so great. I had to give her the people's elbow and show her what real pain looks like"
        author="Mr. Sir"
        dateCreated={date}
        onSubmit={(note) => alert(`Submitted ${note.message}`)}
    />