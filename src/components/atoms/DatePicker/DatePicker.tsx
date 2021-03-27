import React from "react";
import { Field, FieldInputProps } from "react-final-form";
import camelize from "../../../utils/camelize";
import { DateTimePicker } from "@material-ui/pickers";
import { dateNowIso } from "../../../utils/dateUtil";
import DatePickerWrapper from "./DatePickerWrapper";

export default function () {
  const label = "Next appointment";
  const camelizedName: string = camelize(label);
  const defaultDate = dateNowIso();

  return (
    // We need to set the initial value of the Field so FF
    // can pick it up if nothing has changed
    <Field name={camelizedName} initialValue={defaultDate}>
      {(props: FieldInputProps<any>) => (
        <DatePickerWrapper>
          {/*@ ts-ignore */}
          <DateTimePicker
            style={{ minWidth: "200px" }}
            onChange={(momentDate) => {
              if (momentDate !== null) {
                props.input.onChange(momentDate.format());
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
        </DatePickerWrapper>
      )}
    </Field>
  );
}
