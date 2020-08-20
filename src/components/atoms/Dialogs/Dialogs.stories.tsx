import React from "react";
import CalendarDialog from "./CalendarDialog";
import DateTimeDialog from "./DateTimeDialog";

export default {
    title: "Atoms/Dialogs"
};

export const calendarDialog = () =>
    <CalendarDialog
        isOpen={true}
        handleSubmit={() => console.log("submitting")}
        handleCancel={() => console.log("closing")}
    />

export const dateTimeDialog = () =>
    <DateTimeDialog
        isOpen={true}
        handleSubmit={() => console.log("submitting")}
        handleCancel={() => console.log("closing")}
    />