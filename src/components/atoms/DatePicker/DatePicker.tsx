import React from 'react'
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import {Field, FieldInputProps} from "react-final-form";
import camelize from "../../../utils/camelize";

interface OldDatePickerReturn {
    nextAppointment: string
}

export default function DatePicker() {
    const label = "Next appointment"
    const camelizedName: string = camelize(label);
    const defaultDate = moment().format('yyyy-MM-DD[T]HH:mm');

    return (
        // We need to set the initial value of the Field so FF
        // can pick it up if nothing has changed
        <Field name={camelizedName} initialValue={defaultDate}>
            {(props: FieldInputProps<any>) => {
                return (
                    <TextField
                        onChange={props.input.onChange}
                        defaultValue={defaultDate}
                        name={props.input.label}
                        id="datetime-local"
                        label={label}
                        type="datetime-local"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                );
            }}
        </Field>
    )
}
