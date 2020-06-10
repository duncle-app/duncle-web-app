import React from "react";
import CustomTextField from "./CustomTextField";
import EmailTextField from "./EmailTextField";
import PasswordTextFieldProps from "./PasswordTextField";
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: "Atoms/TextField",
    component: CustomTextField,
};

export const emailField = () => (
    <MockForm>
        <EmailTextField/>
    </MockForm>
);

export const passwordField = () => (
    <MockForm>
        <PasswordTextFieldProps/>
    </MockForm>
)

export const customTextField = () => (
    <MockForm>
        <CustomTextField name={"Enter your custom text here"}/>
    </MockForm>
)

export const requiredField = () => (
    <MockForm>
        <CustomTextField name={"This should have an asterisk next to it"} isRequired/>
    </MockForm>
)
