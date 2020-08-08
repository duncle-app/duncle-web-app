import React from 'react'
import useStyles from "../../../global-styles";
import {useUserPouch} from "../../../common/hooks/UsePouch";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Avatar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Form} from "react-final-form";
import {SignUpForm} from "../../organisms/SignUp/SignUpForm";
import {AccountCircle} from "@material-ui/icons";
import UserDAO from "../../../model/userDAO";
import LoginService from "../../../services/LoginService";

export default function SignUp() {
    const classes = useStyles();
    const loginService = new LoginService();

    function submitForm(newUser: UserDAO) {
        alert(`${newUser.email} + ${newUser.password} + ${newUser.firstName} + ${newUser.lastName}`)
        const response = loginService.signUpUser(newUser)
        console.log(response)
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
