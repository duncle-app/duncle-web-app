import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import {FullCalendarProps} from "../calendarConstants";

interface CalendarEvent {
    title: string,
    start: string,
    end: string,
}

export default ({outlookResponse: {value, ["@odata.context"]: mrsir}}: FullCalendarProps) => {
// export default ({outlookResponse}: FullCalendarProps) => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);

    console.log(mrsir)

    useEffect(() => {
        const newArray = value.map(({subject, start, end}) =>
            ({start: start.dateTime, end: end.dateTime, title: subject}))
        setEvents(newArray)
    }, events)

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            events={events}
        />
    )
}

