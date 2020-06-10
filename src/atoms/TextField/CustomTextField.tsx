import React from "react";
import TextField from "@material-ui/core/TextField";

interface TextFieldProps {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLElement> | any) => void;
    isRequired?: boolean
}

export default function CustomTextField({ name, onChange, isRequired = false }: TextFieldProps) {
    const lowercaseName: string = name.toLowerCase();

    return (
        <>
            <TextField
                onChange={onChange}
                variant="outlined"
                margin="normal"
                required={isRequired}
                fullWidth
                id={lowercaseName}
                label={name}
                name={lowercaseName}
            />
        </>
    );
}
