import React from 'react'
import {TextareaAutosize} from "@material-ui/core";
import {Field, FieldInputProps} from "react-final-form";
import camelize from "../../../utils/camelize";

type TextAreaType = {
    name: string;
    placeholderText: string;
}

export default function ({name, placeholderText}: TextAreaType) {
    const camelizedName: string = camelize(name);

    return (
        <Field name={camelizedName}>
            {(props: FieldInputProps<any>) => (
                <TextareaAutosize
                    id={camelizedName}
                    key={camelizedName}
                    aria-label="minimum height"
                    rowsMin={4}
                    placeholder={placeholderText}
                    required
                />
            )}
        </Field>
    )
}
