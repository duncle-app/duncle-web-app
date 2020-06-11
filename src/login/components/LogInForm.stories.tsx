import React from 'react'
import {LogInForm} from "./LogInForm";
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: `Login/Form`,
    component: LogInForm,
};

export const withProps = () => (
    <MockForm>
        <LogInForm/>
    </MockForm>
);
