import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "@material-ui/pickers";
import DatePickerWrapper from "./DatePickerWrapper";
import useGlobalDatePicker from "./useGlobalDatePicker";
import { useGlobalDatePickerState } from "../../../common/providers/GlobalDatePickerProvider";
import camelize from "../../../utils/camelize";
import { dateNowIso } from "../../../utils/dateUtil";
import { LastContactType } from "../../../model/newLibrary";

interface Props {
  contactType: LastContactType;
}

export default ({ contactType }: Props) => {
  const label: string = camelize("Next appointment");
  const defaultDate = dateNowIso();
  const [datePickerValue, setDatePickerValue] = useState(defaultDate);
  const { isOpen } = useGlobalDatePickerState();
  const { handleClose, handleSubmit } = useGlobalDatePicker();

  return (
    <div>
      <Dialog
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
          <DatePickerWrapper>
            <DateTimePicker
              variant="static"
              style={{ minWidth: "200px" }}
              onChange={(momentDate) => {
                if (momentDate) {
                  setDatePickerValue(momentDate.format());
                }
              }}
              defaultValue={defaultDate}
              name={label}
              value={datePickerValue}
              disablePast
              autoOk
            />
          </DatePickerWrapper>
        </Fade>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleSubmit(datePickerValue, contactType)}
            color="secondary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
