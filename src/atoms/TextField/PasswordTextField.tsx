import React from 'react'
import TextField from "@material-ui/core/TextField";
import {Field, FieldInputProps} from "react-final-form";

export default function PasswordTextField() {
    return (
        <Field name="password">
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
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                </>
            )}
        </Field>
    );
}