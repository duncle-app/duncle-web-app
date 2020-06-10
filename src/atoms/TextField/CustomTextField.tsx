import React from "react";
import TextField from "@material-ui/core/TextField";
import {Field, FieldInputProps} from "react-final-form";

interface TextFieldProps {
    name: string;
    isRequired?: boolean
}

export default function CustomTextField({name, isRequired = false}: TextFieldProps) {
    const lowercaseName: string = name.toLowerCase();

    return (
        <Field name={lowercaseName}>
            {(props: FieldInputProps<any>) => (
                <>
                    <TextField
                        onChange={props.input.onChange}
                        value={props.input.value}
                        name={props.input.name}
                        variant="outlined"
                        margin="normal"
                        required={isRequired}
                        fullWidth
                        id={lowercaseName}
                        label={name}
                        key={lowercaseName}
                    />
                </>
            )}
        </Field>
    );
}
