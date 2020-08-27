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
import UserDAO from "../../../model/userDAO";
import {useHistory} from "react-router-dom";

export default function SignUp() {
    const classes = useStyles();
    const history = useHistory();
    const loginService = new LoginService();
    const {authenticate} = useContext(GlobalContext)

    async function submitForm(newUser: NewUser) {
        // todo - do validation the passwords actually match
        delete newUser.confirmPassword
        const response = loginService.signUpUser(newUser)

        try {
            const newlyCreatedUser: UserDAO = {
                // @ts-ignore
                _id: response.id,
                // @ts-ignore
                _rev: response.rev,
                ...newUser
            }

            await authenticate(newlyCreatedUser)
            history.push('/dashboard')
        } catch (e) {
            console.log(response)
        }
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
