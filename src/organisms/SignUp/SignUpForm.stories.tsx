import React from "react";
import MockForm from "../../storybook-mocks/mockForm";
import {SignUpForm} from "./SignUpForm";

export default {
    title: "organisms/SignUp",
    component: SignUpForm,
};

export const withProps = () => (
    <MockForm>
        <SignUpForm/>
    </MockForm>
);
