import React, {useContext} from 'react'
import useStyles from "../../../global-styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Avatar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Form} from "react-final-form";
import {SignUpForm} from "../../organisms/SignUp/SignUpForm";
import {AccountCircle} from "@material-ui/icons";
import LoginService from "../../../services/LoginService";
import NewUser from "../../../model/newUser";
import {GlobalContext} from "../../../common/GlobalContext";

export default function SignUp() {
    const classes = useStyles();
    const loginService = new LoginService();
    const {authenticate} = useContext(GlobalContext)

    function submitForm(newUser: NewUser) {
        alert(`${newUser.email} + ${newUser.password} + ${newUser.firstName} + ${newUser.lastName}`)
        // todo - do validation the passwords actually match
        delete newUser.confirmPassword
        const response = loginService.signUpUser(newUser)
        // todo - authenticate if success here
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
