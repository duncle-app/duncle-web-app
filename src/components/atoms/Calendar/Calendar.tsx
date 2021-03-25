import React, { useContext, useState } from "react";
import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DateTimeDialog, { DateDialogReturn } from "../Dialogs/DateTimeDialog";
import { v4 as uuidv4 } from "uuid";

import "./main.css";
import { GlobalContext } from "../../../common/GlobalContext";
import event from "../../../model/event";
import { dateNowIso, readableDate } from "../../../utils/dateUtil";
import UserDAO from "../../../model/userDAO";
import { useUserPouch } from "../../../common/hooks/UsePouch";
import { useNotification } from "../Snackbar/Snackbar";

// todo - fix this
export default function ({ initialEvents }: any) {
  const [weekendsVisible, setWeekendsVisible] = useState<boolean>(true);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [selectedDates, setSelectedDates] = useState<DateSelectArg>();
  const { setSuccess, setError } = useNotification();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { authenticate, getAuthenticatedUser } = useContext(GlobalContext);
  const { updateUser } = useUserPouch();

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setIsOpen(true);
    setSelectedDates(selectInfo);
  };

  const handleSubmit = async ({ appointmentTitle }: DateDialogReturn) => {
    console.log({ appointmentTitle });
    //// add to calendar events
    // @ts-ignore - todo, better way to tell this isn't undefined, possibly pass in as parameter?
    const { calendar } = selectedDates.view;
    calendar.unselect(); // clear date selection

    if (selectedDates) {
      console.log({ selectedDates });

      const newId = uuidv4();
      const startDate = selectedDates.startStr;
      const endDate = selectedDates.endStr;
      const now = dateNowIso();

      const newEvent: event = {
        id: newId,
        title: appointmentTitle,
        start: startDate,
        end: endDate,
        libraryId: "NEED LIB ID",
        hasContacted: false,
        dateCreated: now,
        dateUpdated: now,
      };

      const currentUser: UserDAO = await getAuthenticatedUser();

      // todo - find out how to reuse this code (see ViewLibrary.tsx:146)
      //  calling hooks inside a service function is a no-no :(
      try {
        const response = await updateUser(currentUser);
        currentUser._rev = response.rev;
        currentUser.events.push(newEvent);
        authenticate(currentUser);
        setSuccess(`Successfully added event for: ${readableDate(startDate)}`);
      } catch (e) {
        setError(`Unable to add appointment: ${e}`);
      }

      calendar.addEvent({
        id: newId,
        title: appointmentTitle,
        // todo - set date from nextAppointment
        start: startDate,
        end: endDate,
        allDay: false,
      });
    }
    setIsOpen(false);
  };

  const cancel = () => setIsOpen(false);

  const handleEventClick = (clickInfo: EventClickArg) => {
    // @ts-ignore
    // eslint-disable-next-line
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };

  return (
    <div className="demo-app">
      <DateTimeDialog
        isOpen={isOpen}
        handleSubmit={handleSubmit}
        handleCancel={cancel}
      />
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={initialEvents} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          eventChange={function (eventChange) {
            console.log({ eventChange });
          }}
          eventAdd={function (eventAdd) {
            console.log({ eventAdd });
          }}
          /* you can update a remote database when these fire:
                    eventRemove={function(){}}
                    */
        />
      </div>
    </div>
  );

  function renderEventContent(eventContent: EventContentArg) {
    return (
      <>
        <strong>{eventContent.timeText}</strong>
        <i>{eventContent.event.title}</i>
      </>
    );
  }
}
