import React from 'react'
import {Field} from "react-final-form";

interface EditFieldProps {
    label: string,
    placeholder: string,
    id: string,
    value: any,
}

function EditField(props: EditFieldProps) {
    const {label, placeholder, id, value} = props;

    return (
        <div>
            <label>{label}</label>
            <Field
                name={id}
                component="input"
                type="text"
                placeholder={placeholder}
                initialValue={value}
            />
        </div>
    )
}

export default EditField
