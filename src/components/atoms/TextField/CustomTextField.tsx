import React from "react";
import TextField from "@material-ui/core/TextField";
import {Field, FieldInputProps} from "react-final-form";
import camelize from "../../../utils/camelize";

interface TextFieldProps {
    name: string;
    isRequired?: boolean
    defaultValue?: string | number
}

export default function CustomTextField({name, isRequired = false, defaultValue = undefined}: TextFieldProps) {
    const camelizedName: string = camelize(name);

    return (
        <Field name={camelizedName}>
            {(props: FieldInputProps<any>) => (
                <TextField
                    onChange={props.input.onChange}
                    name={props.input.name}
                    defaultValue={defaultValue}
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

