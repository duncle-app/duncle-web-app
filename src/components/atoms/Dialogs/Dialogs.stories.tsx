import React from "react";
import CalendarDialog from "./CalendarDialog";
import DateTimeDialog from "./DateTimeDialog";
import MockForm from "../../storybook-mocks/mockForm";
import EmailTextField from "../TextField/EmailTextField";

export default {
    title: "Atoms/Dialogs"
};

export const calendarDialog = () =>
    <CalendarDialog
        isOpen={true}
        handleCancel={() => console.log("closing")}
    />

export const dateTimeDialog = () => {
    return (
        <MockForm>
            <DateTimeDialog
                isOpen={true}
                handleCancel={() => console.log("cancelling")}
            />
        </MockForm>
    )
}