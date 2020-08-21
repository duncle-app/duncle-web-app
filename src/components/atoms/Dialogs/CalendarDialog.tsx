import React from 'react'
import Calendar from "../Calendar/Calendar";
import DialogueWrapper, {DialogProps} from "./DialogueWrapper";

export default (props: DialogProps) =>
    <DialogueWrapper {...props}>
        <Calendar/>
    </DialogueWrapper>