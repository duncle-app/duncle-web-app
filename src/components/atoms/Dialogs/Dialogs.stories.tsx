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
        handleSubmit={() => console.log("submitting")}
        handleCancel={() => console.log("closing")}
    />

export const dateTimeDialog = () => {
    return (
        <MockForm>
            <DateTimeDialog
                isOpen={true}
                handleSubmit={(e) => console.log("submitting", e)}
                handleCancel={() => console.log("cancelling")}
            />
        </MockForm>
    )
}