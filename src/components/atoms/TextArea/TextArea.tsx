import React from 'react'
import {TextareaAutosize} from "@material-ui/core";
import {Field, FieldInputProps} from "react-final-form";
import camelize from "../../../utils/camelize";
import TextField from "@material-ui/core/TextField";

type TextAreaType = {
    name: string;
    message: string;
    placeholderText: string;
}

export default function ({name, placeholderText, message}: TextAreaType) {
    const camelizedName: string = camelize(name);

    return (
        <Field name={camelizedName}>
            {(props: FieldInputProps<any>) => (
                <TextareaAutosize
                    onChange={props.input.onChange}
                    value={message}
                    name={props.input.name}
                    id={camelizedName}
                    key={camelizedName}
                    aria-label="minimum height"
                    rowsMin={4}
                    placeholder={placeholderText}
                    required
                />
            )
            }
        </Field>
    )
}
