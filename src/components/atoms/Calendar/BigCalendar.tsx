import React from 'react'
import {momentLocalizer, Calendar, Event as CalendarEvent} from 'react-big-calendar'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from 'moment'

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const DnDCalendar = withDragAndDrop(Calendar);

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

type props = {
    events: CalendarEvent[];
}

const onEventResize = (data) => {
    const { start, end } = data;

    // todo - use hooks to change state
    // this.setState((state) => {
    //     state.events[0].start = start;
    //     state.events[0].end = end;
    //     return { events: state.events };
    // });
};

// @ts-ignore
export const MyCalendar = ({events} : props) => (
    <div>
        <DnDCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onEventResize={onEventResize}
            style={{ height: "50vh" }}
        />
    </div>
);