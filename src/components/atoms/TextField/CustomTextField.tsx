import React from "react";
import TextField from "@material-ui/core/TextField";
import {Field, FieldInputProps} from "react-final-form";
import camelize from "../../../utils/camelize";

interface TextFieldProps {
    name: string;
    isRequired?: boolean
}

export default function CustomTextField({name, isRequired = false}: TextFieldProps) {
    const camelizedName: string = camelize(name);

    return (
        <Field name={camelizedName}>
            {(props: FieldInputProps<any>) => (
                <TextField
                    onChange={props.input.onChange}
                    value={props.input.value}
                    name={props.input.name}
                    variant="outlined"
                    margin="normal"
                    required={isRequired}
                    fullWidth
                    id={camelizedName}
                    label={name}
                    key={camelizedName}
                />
            )}
        </Field>
    );
}
