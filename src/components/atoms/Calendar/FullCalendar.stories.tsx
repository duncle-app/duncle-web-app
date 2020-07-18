import React from "react";
import FullCalendar from "./FullCalendar"
import {outlookResponse} from "./calendarConstants";

export default {
    title: "Test/FullCalendar",
    component: FullCalendar,
};



export const withProps = () => (
    <FullCalendar outlookResponse={outlookResponse}/>
);