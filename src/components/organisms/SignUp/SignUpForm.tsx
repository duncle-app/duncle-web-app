import React from 'react'
import EmailTextField from "../../atoms/TextField/EmailTextField";
import PasswordTextField from "../../atoms/TextField/PasswordTextField";
import FormSubmitButton from "../../atoms/Button/FormSubmitButton";
import useStyles from "../../../global-styles";
import CustomTextField from "../../atoms/TextField/CustomTextField";

export const SignUpForm = (props: any) => {
    const classes = useStyles();
    const {handleSubmit} = props;

    return (
        <>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <CustomTextField name="First Name" isRequired/>
                <CustomTextField name="Last Name" isRequired/>
                <EmailTextField/>
                <PasswordTextField/>
                <PasswordTextField fieldName="Confirm Password"/>
                <FormSubmitButton DisplayText="Create Account"/>
            </form>
        </>
    );
};