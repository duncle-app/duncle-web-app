import React, {useState} from "react";
import useStyles from "../../../global-styles";
import Library from "../../../model/library";
import {Divider, List, ListItem, ListItemText} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import EventNote from "@material-ui/icons/EventNote";
import {createEventId} from "../Calendar/utils";
import {DateSelectArg} from "@fullcalendar/react";
import CalendarDialog from "../Dialogs/CalendarDialog";
import {cloneDeep, isEmpty, isEqual} from "lodash";
import {readableDate} from "../../../utils/dateUtil";
import Typography from "@material-ui/core/Typography";
import DatePicker from "../DatePicker/DatePicker";
import {useNotification} from "../Snackbar/Snackbar";
import DefaultButton from "../Button/DefaultButton";
import Form from "../../../common/Form";
import {useLibraryPouch} from "../../../common/hooks/UsePouch";

interface drawerProps {
    library: Library;
}

export default ({library}: drawerProps) => {
    const {libraryName, city, state, street, zip, email, librarian, phoneNumber, assistant, dateNextContact} = library
    const {muiDrawer, drawerPaper, calendarIcon} = useStyles()
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [nextContactDate, setNextContactDate] = useState<string | undefined>(dateNextContact)
    const [selectedDates] = useState<DateSelectArg>()
    const {setSuccess, setInfo, setError} = useNotification()

    const {saveLibrary} = useLibraryPouch()

    const cancel = () => setIsOpen(false)

    // todo - this logic is duplicated from EditLibraryController
    // @ts-ignore
    const handleScheduleNextAppointment = async ({nextAppointment}) => {
        // this contains a subset of the props, and just save those to the new object
        try {
            const copy = cloneDeep(library)
            library.dateNextContact = nextAppointment

            if (!isEqual(copy, library)) {
                // @ts-ignore
                const {rev} = await saveLibrary(library);
                library._rev = rev
                setNextContactDate(nextAppointment)
                setSuccess('Successfully saved library')
            } else {
                setInfo('No updates were made, contents were identical')
            }
        } catch (e) {
            setError(e)
        }
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
            <CalendarDialog handleSubmit={handleClose}  handleCancel={cancel} isOpen={isOpen}/>
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
                    <ListItem>
                        <ListItemText
                            primary="Contacts"
                            secondary={
                                <>
                                    <div>{librarian}</div>
                                    <div>{email} {phoneNumber}</div>
                                    <div>Assistant: {!isEmpty(assistant) ? assistant : 'N/A'}</div>
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
                                        <div>{!isEmpty(nextContactDate) ? readableDate(nextContactDate) : 'N/A'}</div>
                                    </Typography>
                                    <Typography variant="h6" style={{color: 'black'}}>
                                        Schedule Appointment
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

