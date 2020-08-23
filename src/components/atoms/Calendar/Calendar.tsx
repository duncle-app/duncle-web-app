import React, {useState} from 'react'
import FullCalendar, {DateSelectArg, EventApi, EventClickArg, EventContentArg, formatDate} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import DateTimeDialog, {DateDialogReturn} from "../Dialogs/DateTimeDialog";
import {createEventId, INITIAL_EVENTS} from "./utils";

import './main.css'

export default function() {
    const [weekendsVisible, setWeekendsVisible] = useState<boolean>(true)
    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])
    const [selectedDates, setSelectedDates] = useState<DateSelectArg>()
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleWeekendsToggle = () => {
        setWeekendsVisible(!weekendsVisible)
    }

    const handleDateSelect = (selectInfo: DateSelectArg) => {
        setIsOpen(true)
        setSelectedDates(selectInfo)
    }

    // todo - pass in name here, and set that as a title
    const handleSubmit = ({appointmentTitle}: DateDialogReturn) => {
        console.log({appointmentTitle})
        //// add to calendar events
        // @ts-ignore - todo, better way to tell this isn't undefined, possibly pass in as parameter?
        const {calendar} = selectedDates.view;
        calendar.unselect() // clear date selection

        if (selectedDates) {
            console.log({selectedDates})
            calendar.addEvent({
                id: createEventId(),
                title: appointmentTitle,
                // todo - set date from nextAppointment
                start: selectedDates.startStr,
                end: selectedDates.endStr,
                allDay: false
            })
        }
        setIsOpen(false)
    }

    const cancel = () => setIsOpen(false)

    const handleEventClick = (clickInfo: EventClickArg) => {
        // @ts-ignore
        // eslint-disable-next-line
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    const handleEvents = (events: EventApi[]) => {
        setCurrentEvents(events)
    }

    return (
        <div className='demo-app'>
            {/*{renderSidebar()}*/}
            <DateTimeDialog isOpen={isOpen} handleSubmit={handleSubmit} handleCancel={cancel}/>
            <div className='demo-app-main'>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={weekendsVisible}
                    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    select={handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventClick={handleEventClick}
                    eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                    eventChange={function(r){
                        console.log({r})
                    }}
                    eventAdd={function(r){
                        console.log({r})
                    }}
                    /* you can update a remote database when these fire:
                    eventRemove={function(){}}
                    */
                />
            </div>
        </div>
    )

    function renderSidebar() {
        return (
            <div className='demo-app-sidebar'>
                <div className='demo-app-sidebar-section'>
                    <label>
                        <input
                            type='checkbox'
                            checked={weekendsVisible}
                            onChange={handleWeekendsToggle}
                        />
                        toggle weekends
                    </label>
                </div>
                <div className='demo-app-sidebar-section'>
                    <h2>All Events ({currentEvents.length})</h2>
                    <ul>
                        {currentEvents.map(renderSidebarEvent)}
                    </ul>
                </div>
            </div>
        )
    }

    function renderEventContent(eventContent: EventContentArg) {
        return (
            <>
                <strong>{eventContent.timeText}</strong>
                <i>{eventContent.event.title}</i>
            </>
        )
    }

    function renderSidebarEvent(event: EventApi) {
        return (
            <li key={event.id}>
                <strong>{formatDate(event.start!, {year: 'numeric', month: 'short', day: 'numeric'})}</strong>
                <i>{event.title}</i>
            </li>
        )
    }
}
