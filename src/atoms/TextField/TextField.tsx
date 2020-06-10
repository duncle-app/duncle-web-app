import React from "react";
import { TextField as MaterialTextField } from "@material-ui/core";

interface TextFieldProps {
    name: string;
    value: any;
}

function TextField({ name, value }: TextFieldProps) {
    return (
        <>
            <MaterialTextField
                label={name}
                variant="outlined"
                defaultValue={value}
                size="small"
                disabled
            />
        </>
    );
}

export default TextField;