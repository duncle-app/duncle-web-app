import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import DatePickerWrapper from "./DatePickerWrapper";
import useGlobalDatePicker from "./useGlobalDatePicker";
import { Modal } from "@material-ui/core";
import { flexCenterCss } from "../../../common/styles/FlexCenter";
import styled from "styled-components";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import { useGlobalDatePickerState } from "../../../common/providers/GlobalDatePickerProvider";

export default () => {
  const [date, changeDate] = useState(new Date());
  const { isOpen } = useGlobalDatePickerState();
  console.log("dp open", isOpen);
  const { handleClose } = useGlobalDatePicker();

  const CenteredModal = styled(Modal)`
    ${flexCenterCss};
  `;
  return (
    <div>
      <CenteredModal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <DatePickerWrapper>
            <DatePicker
              autoOk
              variant="static"
              openTo="date"
              value={date}
              // @ts-ignore
              onChange={changeDate}
            />
          </DatePickerWrapper>
        </Fade>
      </CenteredModal>
    </div>
  );
};
