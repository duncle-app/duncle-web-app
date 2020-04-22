import React from 'react'
import {Field} from "react-final-form";

interface EditFieldProps {
    label: string,
    id: string,
    value: any,
}

function EditField(props: EditFieldProps) {
    const {label, id, value} = props;

    return (
        <div>
            <label>{label}</label>
            <Field
                name={id}
                component="input"
                type="text"
                data={value}
            />
        </div>
    )
}

export default EditField
