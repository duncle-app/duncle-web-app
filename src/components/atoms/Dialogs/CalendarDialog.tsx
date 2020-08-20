import React from 'react'
import Calendar from "../Calendar/Calendar";
import DialogueWrapper from "./DialogueWrapper";


export default () =>
    <DialogueWrapper isOpen={true} handleClose={() => console.log("mr sir")}>
        <Calendar/>
    </DialogueWrapper>