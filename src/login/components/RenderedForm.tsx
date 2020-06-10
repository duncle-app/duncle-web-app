import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Field} from "react-final-form";
import EmailTextField from "../../atoms/TextField/EmailTextField";
import PasswordTextField from "../../atoms/TextField/PasswordTextField";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export const RenderedForm = (props: any) => {
    const classes = useStyles();
    const {handleSubmit} = props;

    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Field name="email">
                {props => (
                    <EmailTextField onChange={props.input.onChange}/>
                )}
            </Field>
            <Field name="password">
                {props => (
                    <PasswordTextField onChange={props.input.onChange}/>
                )}
            </Field>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}
