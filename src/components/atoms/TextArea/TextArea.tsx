import React from 'react'
import {TextareaAutosize} from "@material-ui/core";

type TextAreaType = {
    placeholderText: string;
}

export default function TextArea({placeholderText}: TextAreaType) {
    return (
        <>
            <TextareaAutosize
                aria-label="minimum height"
                rowsMin={4}
                placeholder={placeholderText}
            />
        </>
    )
}
