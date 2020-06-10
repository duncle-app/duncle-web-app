import React from 'react'
import TextField from "@material-ui/core/TextField";

interface PasswordTextFieldProps {
    onChange: (event: React.ChangeEvent<HTMLElement> | any) => void;
}

export default function PasswordTextFieldProps({ onChange }: PasswordTextFieldProps) {
    return (
        <>
            <TextField
                onChange={onChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
        </>
    );
}