import React from "react";
import {MyCalendar} from "./BigCalendar"
import moment from "moment";
import {events} from "./calendarConstants";

export default {
    title: "Test/BigCalendar",
    component: MyCalendar,
};

export const withProps = () => (
    <MyCalendar events={events}/>
);