import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "@material-ui/pickers";
import DatePickerWrapper from "./DatePickerWrapper";
import useGlobalDatePicker from "./useGlobalDatePicker";
import { flexCenterCss } from "../../../common/styles/FlexCenter";
import styled from "styled-components";
import { useGlobalDatePickerState } from "../../../common/providers/GlobalDatePickerProvider";
import camelize from "../../../utils/camelize";
import { dateNowIso } from "../../../utils/dateUtil";
import { Field, FieldInputProps } from "react-final-form";

export default () => {
  const label = "Next appointment";
  const camelizedName: string = camelize(label);
  const defaultDate = dateNowIso();
  const { isOpen } = useGlobalDatePickerState();
  const { handleClose } = useGlobalDatePicker();

  const CenteredDialog = styled(Dialog)`
    ${flexCenterCss};
  `;

  return (
    <div>
      <CenteredDialog
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          {/*
             NOTE: Borrowed from DatePicker.tsx
             We need to set the initial value of the Field so FF
             can pick it up if nothing has changed
         */}
          <Field name={camelizedName} initialValue={defaultDate}>
            {(props: FieldInputProps<any>) => (
              <DatePickerWrapper>
                <DateTimePicker
                  variant="static"
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
        </Fade>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          {/* todo - handle creating a new appt here */}
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </CenteredDialog>
    </div>
  );
};
