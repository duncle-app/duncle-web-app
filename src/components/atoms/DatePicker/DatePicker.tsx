import React from 'react'
import moment from "moment";
import {Field, FieldInputProps} from "react-final-form";
import camelize from "../../../utils/camelize";
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface OldDatePickerReturn {
    nextAppointment: string
}

export default function () {
    const label = "Next appointment"
    const camelizedName: string = camelize(label);
    const defaultDate = moment().format('yyyy-MM-DD[T]HH:mm:ss');

    return (
        // We need to set the initial value of the Field so FF
        // can pick it up if nothing has changed
        <Field name={camelizedName} initialValue={defaultDate}>
            {(props: FieldInputProps<any>) => {
                return (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        {/*@ ts-ignore */}
                        <DateTimePicker
                            onChange={props.input.onChange}
                            defaultValue={defaultDate}
                            name={props.input.label}
                            // thank you mui-rff
                            // https://github.com/lookfirst/mui-rff/blob/master/src/DateTimePicker.tsx
                            value={props.input.value}
                            autoOk
                        />
                    </MuiPickersUtilsProvider>
                );
            }}
        </Field>
    )
}
