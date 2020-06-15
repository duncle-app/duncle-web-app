import Grid from "@material-ui/core/Grid";
import {default as MuiLink} from "@material-ui/core/Link";
import React from "react";
import EmailTextField from "../../atoms/TextField/EmailTextField";
import PasswordTextField from "../../atoms/TextField/PasswordTextField";
import useStyles from "../../../global-styles";
import FormSubmitButton from "../../atoms/Button/FormSubmitButton";
import {Link} from "react-router-dom";
import {LinkTo} from "@storybook/addon-links";

export const LogInForm = (props: any) => {
    const classes = useStyles();
    const {handleSubmit} = props;

    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <EmailTextField/>
            <PasswordTextField/>
            <FormSubmitButton DisplayText="Sign in"/>
            <Grid container>
                <Grid item xs>
                    <Link to="/password/reset">
                        <MuiLink variant="body2">
                            Forgot password?
                        </MuiLink>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/signup">
                        <MuiLink variant="body2">
                            Don't have an account? Sign Up
                        </MuiLink>
                    </Link>
                </Grid>
            </Grid>
        </form>
    );
}
