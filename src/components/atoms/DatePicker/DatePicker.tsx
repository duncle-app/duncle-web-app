import React from 'react'
import {Field, FieldInputProps} from "react-final-form";
import camelize from "../../../utils/camelize";
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/moment';
import {dateNowIso} from "../../../utils/dateUtil";

interface OldDatePickerReturn {
    nextAppointment: string
}

export default function () {
    const label = "Next appointment"
    const camelizedName: string = camelize(label);
    const defaultDate = dateNowIso();

    return (
        // We need to set the initial value of the Field so FF
        // can pick it up if nothing has changed
        <Field name={camelizedName} initialValue={defaultDate}>
            {(props: FieldInputProps<any>) => {
                return (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        {/*@ ts-ignore */}
                        <DateTimePicker
                            style={{minWidth: "200px"}}
                            onChange={(momentDate) => {
                                if (momentDate !== null) {
                                    props.input.onChange(momentDate.format())
                                }
                            }}
                            defaultValue={defaultDate}
                            name={props.input.label}
                            // thank you mui-rff
                            // https://github.com/lookfirst/mui-rff/blob/master/src/DateTimePicker.tsx
                            value={props.input.value}
                            disablePast
                            autoOk
                        />
                    </MuiPickersUtilsProvider>
                );
            }}
        </Field>
    )
}
