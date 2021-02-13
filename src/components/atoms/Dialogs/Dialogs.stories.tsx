import React from "react";
import CalendarDialog from "./CalendarDialog";
import DateTimeDialog from "./DateTimeDialog";
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: "Atoms/Dialogs"
};

export const calendarDialog = () =>
    <CalendarDialog
        handleSubmit={() => console.log("submitting")}
        isOpen={true}
        handleCancel={() => console.log("closing")}
    />

export const scheduleAppointmentDialog = () => {
    return (
        <MockForm>
            <DateTimeDialog
                handleSubmit={() => console.log("submitting")}
                isOpen={true}
                handleCancel={() => console.log("cancelling")}
            />
        </MockForm>
    )
}