import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import {outlookResponse} from "./calendarConstants";

interface OutlookEvent {
    "@odata.etag": string,
    id: string,
    subject: string,
    start: {
        dateTime: string,
        timeZone: string
    },
    end: {
        dateTime: string,
        timeZone: string
    },
    organizer: {
        emailAddress: {
            name: string,
            address: string
        }
    }
}

export type FullCalendarProps = {
    outlookResponse: OutlookResponse
}

export interface OutlookResponse {
    "@odata.context": string,
    value: OutlookEvent[],
}

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
        const newArray = value.map(({Subject, Start, End}) =>
            ({start: Start.DateTime, end: End.DateTime, title: Subject}))
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

