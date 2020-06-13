import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Form} from "react-final-form";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useUserPouch} from "../../common/hooks/UsePouch";
import {LogInForm} from "../../organisms/LogIn/LogInForm";
import {Avatar} from "@material-ui/core";
import useStyles from "../../global-styles";
import User from "../../model/user";

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
    const classes = useStyles();
    const { logInUser }: any = useUserPouch();

    function submitForm(user: User) {
        console.log(user)
        const {email, password} = user;
        const response = logInUser(email, password)
        console.log(response)
        alert(`${email} + ${password}`)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
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
