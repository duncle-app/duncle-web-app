import React from "react";
import {MyCalendar} from "./BigCalendar"
import moment from "moment";

export default {
    title: "Test/BigCalendar",
    component: MyCalendar,
};

const events = [
    {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Two day event",
    }
]

export const withProps = () => (
    <MyCalendar events={events}/>
);