import React, { useContext } from "react";
import UserDAO from "../../../model/userDAO";
import event from "../../../model/event";
import { GlobalContext } from "../../../common/GlobalContext";
import UserEvents from "./UserEvents";
import moment from "moment";
import Calendar from "../Calendar/Calendar";

export default function UserEventsController() {
  const [events, setEvents] = React.useState([]);
  const { getAuthenticatedUser } = useContext(GlobalContext);

  React.useEffect(() => {
    getAuthenticatedUser().then((user: UserDAO) => {
      console.log("All events", user.events);
      const filteredEvents = user.events.map(({ title, start }: event) => ({
        title,
        start: moment(start).toDate(),
        rep: "Terry",
      }));

      if (filteredEvents !== null) {
        // @ts-ignore
        setEvents(filteredEvents);
      } else {
        console.log("No events were present");
      }
    });
  }, []);

  return <UserEvents events={events} />;
}
