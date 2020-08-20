import React, {useState} from "react";
import useStyles from "../../../global-styles";
import Library from "../../../model/library";
import {ListItem, List, Divider, ListItemText} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import EventNote from "@material-ui/icons/EventNote";
import DialogueWrapper from "../Dialogs/DialogueWrapper";
import {createEventId} from "../Calendar/utils";
import {DateSelectArg} from "@fullcalendar/react";

interface drawerProps {
    library: Library;
}

export default ({library}: drawerProps) => {
    const {muiDrawer, drawerPaper, calendarIcon, center} = useStyles()
    const {libraryName, city, state, street, zip, email, librarian, phoneNumber} = library;
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedDates, setSelectedDates] = useState<DateSelectArg>()

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
            {/*<DialogueWrapper handleClose={handleClose} isOpen={isOpen}/>*/}
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
                            primaryTypographyProps={{variant: "h4"}}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={librarian}
                            secondary={`${email} ${phoneNumber}`}
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

