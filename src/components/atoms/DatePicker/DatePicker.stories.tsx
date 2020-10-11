import React from "react";
import DatePicker from "./DatePicker";
import MockForm from "../../storybook-mocks/mockForm";
import DefaultButton from "../Button/DefaultButton";

export default {
    title: "Atoms/DatePicker"
};

export const withProps = () =>
    <MockForm>
        <div>
            <DatePicker/>
        </div>
        <div>
            <DefaultButton type="submit">Submit</DefaultButton>
        </div>
    </MockForm>
