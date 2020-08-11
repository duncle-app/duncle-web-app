import React from "react";
import FullCalendar from "./FullCalendar"
import {events} from "./calendarConstants";

export default {
    title: "Test/FullCalendar"
};

export const withProps = () => (
    <FullCalendar events={events}/>
);