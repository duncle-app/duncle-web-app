import React from "react";
import DatePicker from "./DatePicker";
import MockForm from "../../storybook-mocks/mockForm";
import DefaultButton from "../Button/DefaultButton";

export default {
    title: "Atoms/DatePicker"
};

export const withProps = () =>
    <MockForm>
        <DatePicker/>
        <DefaultButton type="submit">Submit</DefaultButton>
    </MockForm>
