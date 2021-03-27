import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import DatePickerWrapper from "./DatePickerWrapper";
import FlexCenter from "../../../common/styles/FlexCenter";

export default () => {
  const [date, changeDate] = useState(new Date());

  return (
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
  );
};
