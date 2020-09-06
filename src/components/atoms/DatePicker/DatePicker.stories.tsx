import React from "react";
import DatePicker from "./DatePicker";
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: "Atoms/DatePicker"
};

export const withProps = () =>
    <MockForm>
        <DatePicker/>
    </MockForm>
