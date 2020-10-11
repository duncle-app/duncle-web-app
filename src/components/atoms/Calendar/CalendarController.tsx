import React, {useContext, useEffect} from 'react'
import Calendar from "./Calendar";
import {GlobalContext} from "../../../common/GlobalContext";
import event from "../../../model/event";

export default function () {
    const INITIAL_EVENT_STATE = [null];
    const [events, setEvents] = React.useState(INITIAL_EVENT_STATE)
    const {getAuthenticatedUser} = useContext(GlobalContext)

    useEffect(() => {
        const user = getAuthenticatedUser()

        const filteredEvents = user.events.map(({id, title, start, end}: event) => (
            {id, title, start, end})
        )

        if (filteredEvents !== null) {
            // @ts-ignore
            setEvents(filteredEvents)
        } else {
            console.log("No events were present")
        }

    }, [])
    return (
        <>
            {/*
            todo - this seems really bad..
                since we're making an "api" call to grab the enents +
                using initial events seems to only render the calendar once,
                events list will be empty the first time we render this calendar (normally).
                Because of this, we only render it with an empty list, and not after we've retrieved our data.
             */}
            {events === INITIAL_EVENT_STATE ? null : <Calendar initialEvents={events}/>}
        </>
    )
}
