import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import React from "react";
import EmailTextField from "../../atoms/TextField/EmailTextField";
import PasswordTextField from "../../atoms/TextField/PasswordTextField";
import useStyles from "../../global-styles";
import FormSubmitButton from "../../atoms/Button/FormSubmitButton";

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
