import React from "react";
import CustomTextField from "./CustomTextField";
import EmailTextField from "./EmailTextField";
import PasswordTextFieldProps from "./PasswordTextField";

export default {
    title: "Atoms/TextField",
    component: CustomTextField,
};

export const emailField = () => <EmailTextField onChange={ () => {} } />;

export const passwordField = () => <PasswordTextFieldProps onChange={ () => {} } />;

export const customTextField = () => <CustomTextField name={"Mr Sir"} onChange={ () => {} } />;
