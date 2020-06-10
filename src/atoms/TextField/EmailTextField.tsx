import React from 'react'
import TextField from "@material-ui/core/TextField";
import {Field, FieldInputProps} from "react-final-form";

export default function EmailTextField() {
    return (
        <Field name="email">
            {(props: FieldInputProps<any>) => (
                <>
                    <TextField
                        onChange={props.input.onChange}
                        value={props.input.value}
                        name={props.input.name}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        id="email"
                        autoComplete="email"
                        autoFocus
                    />
                </>
            )}
        </Field>
    );
}