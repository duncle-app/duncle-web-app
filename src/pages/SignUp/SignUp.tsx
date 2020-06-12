import React from 'react'
import useStyles from "../../global-styles";
import {useUserPouch} from "../../control/hooks/UsePouch";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Avatar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Form} from "react-final-form";
import {SignUpForm} from "../../organisms/SignUp/SignUpForm";
import {AccountCircle} from "@material-ui/icons";
import User from "../../model/user";

export default function SignUp() {
    const classes = useStyles();
    const { addUser }: any = useUserPouch();

    function submitForm(newUser: User) {
        const response = addUser(newUser)
        console.log(response)
        alert(`${newUser.email} + ${newUser.password} + ${newUser.firstName} + ${newUser.lastName}`)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircle/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create your new account
                </Typography>
                <Form
                    onSubmit={submitForm}
                    component={SignUpForm}
                />
            </div>
        </Container>
    );
}
