import React from 'react'
import Button from "@material-ui/core/Button";
import useStyles from "../../../global-styles";

type ButtonProps = {
    DisplayText: string;
}

export default function FormSubmitButton({ DisplayText }: ButtonProps){
    const classes = useStyles();

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
        >
            { DisplayText }
        </Button>
    )
}
