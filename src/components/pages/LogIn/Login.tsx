import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Form} from "react-final-form";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useUserPouch} from "../../../common/hooks/UsePouch";
import {LogInForm} from "../../organisms/LogIn/LogInForm";
import {Avatar} from "@material-ui/core";
import useStyles from "../../../global-styles";
import User from "../../../model/user";
import {Err, Ok, Result, ResultAsync} from "neverthrow";
import LoginService from "../../../services/LoginService";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Duncle
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login() {
    const {paper, avatar} = useStyles();
    const { fetchUser } = useUserPouch();
    const loginService = new LoginService();

    async function submitForm(user: User) {
        try {
            const res = await loginService.logInUser(user);
        } catch (e) {
            alert(`in log in page: ${e.message}`)
        }
        // if (res.isOk()) {
        //     console.log("move onto the next page")
        //     alert("Success - logging in")
        // } else {
        //     console.log("Error - try again")
        //     alert("Try again - show valiation here")
        // }
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={paper}>
                <Avatar className={avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Form
                    onSubmit={submitForm}
                    component={LogInForm}
                />
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}
