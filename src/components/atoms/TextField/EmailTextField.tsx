import React from 'react'
import TextField from "@material-ui/core/TextField";
import {Field, FieldInputProps} from "react-final-form";

export default function EmailTextField() {
    return (
        <Field name="email">
            {({input}: FieldInputProps<any>) => (
                <>
                    <TextField
                        onChange={input.onChange}
                        value={input.value}
                        name={input.name}
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
