import React from 'react'
import TextField from "@material-ui/core/TextField";

interface PasswordTextFieldProps {
    onChange: (event: React.ChangeEvent<HTMLElement> | any) => void;
}

export default function EmailTextFieldProps({ onChange }: PasswordTextFieldProps) {
    return (
        <>
            <TextField
                onChange={onChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                id="email"
                autoComplete="email"
                autoFocus
            />
        </>
    );
}