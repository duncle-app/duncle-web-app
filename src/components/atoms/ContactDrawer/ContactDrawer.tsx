import React, {useState} from "react";
import useStyles from "../../../global-styles";
import Library from "../../../model/library";
import {Divider, List, ListItem, ListItemText} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import EventNote from "@material-ui/icons/EventNote";
import {createEventId} from "../Calendar/utils";
import {DateSelectArg} from "@fullcalendar/react";
import CalendarDialog from "../Dialogs/CalendarDialog";
import {isEmpty} from "lodash";
import {readableDate} from "../../../utils/dateUtil";
import Typography from "@material-ui/core/Typography";
import DatePicker from "../DatePicker/DatePicker";
import {useNotification} from "../Snackbar/Snackbar";
import DefaultButton from "../Button/DefaultButton";
import Form from "../../../common/Form";

interface drawerProps {
    library: Library;
}

export default ({library: {libraryName, city, state, street, zip, email, librarian, phoneNumber, assistant, dateNextContact}}: drawerProps) => {
    const {muiDrawer, drawerPaper, calendarIcon} = useStyles()
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedDates] = useState<DateSelectArg>()
    const {setSuccess} = useNotification()

    const cancel = () => setIsOpen(false)

    // @ts-ignore
    const handleScheduleNextAppointment = (props) => {
        console.log(props)
        setSuccess(`Great success! ${props}`)
    }

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
            <CalendarDialog handleCancel={cancel} isOpen={isOpen}/>
            <div>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={libraryName}
                            secondary={
                                <>
                                    <div>{street} {city}</div>
                                    <div>{state}, {zip}</div>
                                </>
                            }
                            primaryTypographyProps={{variant: "h5"}}
                        />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText
                            primary="Contact Dates"
                            secondary={
                                <>
                                    <Typography variant="body1">
                                        <div>Next Contact Date:</div>
                                        {/*@ts-ignore - we're checking for undefined using isEmpty*/}
                                        <div>{!isEmpty(dateNextContact) ? readableDate(dateNextContact) : 'N/A'}</div>
                                    </Typography>
                                    <Typography variant="h6" style={{color: 'black'}}>
                                        Schedule next contact date
                                    </Typography>
                                    <Form onSubmit={handleScheduleNextAppointment}>
                                        <DatePicker/>
                                        <DefaultButton type="submit">
                                            Schedule
                                        </DefaultButton>
                                    </Form>
                                </>
                            }
                            primaryTypographyProps={{variant: "h5"}}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Contacts"
                            secondary={
                                <>
                                    <div>{}</div>
                                    <div>{email} {phoneNumber}</div>
                                    <div>Assistant: {!isEmpty(assistant) ? assistant : 'N/A'}</div>
                                </>
                            }
                            primaryTypographyProps={{variant: "h5"}}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="View Calendar"
                            primaryTypographyProps={{variant: "h6"}}
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

