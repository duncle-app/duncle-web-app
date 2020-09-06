import React, {useState} from "react";
import useStyles from "../../../global-styles";
import Library from "../../../model/library";
import {Divider, List, ListItem, ListItemText} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import EventNote from "@material-ui/icons/EventNote";
import {createEventId} from "../Calendar/utils";
import {DateSelectArg} from "@fullcalendar/react";
import CalendarDialog from "../Dialogs/CalendarDialog";

interface drawerProps {
    library: Library;
}

export default ({library: {libraryName, city, state, street, zip, email, librarian, phoneNumber, assistant}}: drawerProps) => {
    const {muiDrawer, drawerPaper, calendarIcon} = useStyles()
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedDates] = useState<DateSelectArg>()

    const cancel = () => setIsOpen(false)

    const handleClose = () => {
        if (selectedDates) {
            let calendarApi = selectedDates.view.calendar

            calendarApi.unselect() // clear date selection

            calendarApi.addEvent({
                id: createEventId(),
                title: "DOGGIE",
                start: selectedDates.startStr,
                end: selectedDates.endStr,
                allDay: selectedDates.allDay
            })
        }
        setIsOpen(false);
    }

    return (
        <Drawer
            className={muiDrawer}
            variant="permanent"
            classes={{
                paper: drawerPaper,
            }}
        >
            <CalendarDialog handleSubmit={handleClose} handleCancel={cancel} isOpen={isOpen}/>
            <div>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={libraryName}
                            secondary={` ${street} ${city}, ${state}, ${zip}`}
                            primaryTypographyProps={{variant: "h4"}}
                        />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText
                            primary="Contacts"
                            secondary={
                                <>
                                    <div>{librarian} {email} {phoneNumber}</div>
                                    <div>Assistant: {assistant !== '' ? assistant: 'N/A'}</div>
                                </>
                            }
                            primaryTypographyProps={{variant: "h4"}}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="View Calendar"
                            primaryTypographyProps={{variant: "h5"}}
                        />
                        <EventNote
                            className={calendarIcon}
                            onClick={() => setIsOpen(true)}
                        />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

