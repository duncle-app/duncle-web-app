import React, { useState } from "react";
import useStyles from "../../../global-styles";
import Library from "../../../model/library";
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import EventNote from "@material-ui/icons/EventNote";
import { createEventId } from "../../atoms/Calendar/utils";
import { DateSelectArg } from "@fullcalendar/react";
import CalendarDialog from "../../atoms/Dialogs/CalendarDialog";
import { cloneDeep, isEmpty, isEqual } from "lodash";
import { readableDate } from "../../../utils/dateUtil";
import Typography from "@material-ui/core/Typography";
import { useNotification } from "../../atoms/Snackbar/Snackbar";
import { useLibraryPouch } from "../../../common/hooks/UsePouch";
import ScheduleNext from "../../molecules/ScheduleNext";

interface drawerProps {
  library: Library;
  handleScheduleNextAppointment(props: any): void;
}

// todo - srn - another option is to get the authenticated user and create a new event in here..
//  which I like a little better
export default ({ library, handleScheduleNextAppointment }: drawerProps) => {
  const {
    libraryName,
    city,
    state,
    street,
    zip,
    email,
    librarian,
    phoneNumber,
    assistant,
    dateNextContact,
  } = library;
  const {
    black,
    muiDrawer,
    drawerPaper,
    calendarIcon,
    paddingTop,
    paddingTopTwo,
  } = useStyles();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [nextContactDate, setNextContactDate] = useState<string | undefined>(
    dateNextContact
  );
  const [lastContactDate, setLastContactDate] = useState<string | undefined>(
    dateNextContact
  );
  const [selectedDates] = useState<DateSelectArg>();
  const { setSuccess, setInfo, setError } = useNotification();

  const { saveLibrary } = useLibraryPouch();

  const cancel = () => setIsOpen(false);

  // todo - this logic is duplicated from EditLibraryController
  // @ts-ignore
  const handleScheduleNextContact = async ({ nextAppointment }) => {
    try {
      const copy = cloneDeep(library);
      library.dateNextContact = nextAppointment;

      if (!isEqual(copy, library)) {
        const { _rev } = await saveLibrary(library);
        // grab the latest revision from the newly saved library
        // otherwise you'll be writing on an old revision
        library._rev = _rev;
        setNextContactDate(nextAppointment);
        setSuccess("Successfully saved library");
      } else {
        setInfo("No updates were made, contents were identical");
      }
    } catch (e) {
      setError(`${e}`);
    }
  };

  const handleClose = () => {
    if (selectedDates) {
      let calendarApi = selectedDates.view.calendar;

      calendarApi.unselect(); // clear date selection

      calendarApi.addEvent({
        id: createEventId(),
        title: "DOGGIE",
        start: selectedDates.startStr,
        end: selectedDates.endStr,
        allDay: selectedDates.allDay,
      });
    }
    setIsOpen(false);
  };

  return (
    <Drawer
      className={muiDrawer}
      variant="permanent"
      classes={{
        paper: drawerPaper,
      }}
    >
      <CalendarDialog
        handleSubmit={handleClose}
        handleCancel={cancel}
        isOpen={isOpen}
      />
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary={libraryName}
              secondary={
                <>
                  <div>
                    {street} {city}
                  </div>
                  <div>
                    {state}, {zip}
                  </div>
                </>
              }
              primaryTypographyProps={{ variant: "h5" }}
              secondaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Contacts"
              secondary={
                <>
                  <div>{librarian}</div>
                  <div>
                    {email} {phoneNumber}
                  </div>
                  <div>
                    Assistant: {!isEmpty(assistant) ? assistant : "N/A"}
                  </div>
                </>
              }
              primaryTypographyProps={{ variant: "h5" }}
              secondaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              secondary={
                <>
                  <div className={black}>
                    <Typography variant="h6">View Calendar</Typography>
                    <EventNote
                      className={`${calendarIcon} ${black}`}
                      onClick={() => setIsOpen(true)}
                    />
                  </div>
                  <div className={paddingTop}>
                    <Typography variant="h6">
                      <div className={black}>Next Appointment:</div>
                      {/*@ts-ignore - we're checking for undefined using isEmpty*/}
                      {/*<div>{!isEmpty(nextContactDate) ? readableDate(nextContactDate) : 'N/A'}</div>*/}
                      <div>Put next appt here</div>
                    </Typography>
                  </div>
                  <ScheduleNext
                    title="Schedule Appointment"
                    handleSubmit={handleScheduleNextAppointment}
                  />
                  <div className={paddingTopTwo}>
                    <Divider />
                  </div>
                  <div className={paddingTop}>
                    <Typography variant="h6">
                      <div className={black}>Last Contact:</div>
                      {/*@ts-ignore - we're checking for undefined using isEmpty*/}
                      <div>
                        {!isEmpty(lastContactDate)
                          ? readableDate(lastContactDate)
                          : "N/A"}
                      </div>
                    </Typography>
                  </div>
                  <div className={paddingTop}>
                    <Typography variant="h6">
                      <div className={black}>Next Contact:</div>
                      {/*@ts-ignore - we're checking for undefined using isEmpty*/}
                      <div>
                        {!isEmpty(nextContactDate)
                          ? readableDate(nextContactDate)
                          : "N/A"}
                      </div>
                    </Typography>
                  </div>
                  <ScheduleNext
                    title="Schedule Next Contact"
                    handleSubmit={handleScheduleNextContact}
                  />
                </>
              }
              primaryTypographyProps={{ variant: "h5" }}
            />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
