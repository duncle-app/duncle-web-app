import React from "react";
import FullCalendar from "./Calendar"
import {events} from "./calendarConstants";

export default {
    title: "Atoms/Calendar"
};

export const withProps = () => (
    <FullCalendar/>
);