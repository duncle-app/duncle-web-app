import React from 'react'
import TextField from "@material-ui/core/TextField";
import {Field, FieldInputProps} from "react-final-form";
import camelize from "../../../utils/camelize";

type PasswordProps = {
    fieldName?: string;
}

export default function ({ fieldName = "Password" } : PasswordProps) {
    console.log("field title", fieldName)
    const camelizedFieldName = camelize(fieldName)

    return (
        <Field name={camelizedFieldName}>
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
                        label={fieldName}
                        type="password"
                        id={camelizedFieldName}
                        autoComplete="current-password"
                    />
                </>
            )}
        </Field>
    );
}