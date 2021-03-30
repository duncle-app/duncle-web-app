import React from "react";
import { GlobalDatePickerProvider } from "../../../common/providers/GlobalDatePickerProvider";
import useGlobalDatePicker from "./useGlobalDatePicker";
import MockForm from "../../storybook-mocks/MockForm";

export default {
  title: "Atoms/GlobalDatePicker",
};

export const Default = () => {
  return (
    <MockForm>
      <GlobalDatePickerProvider>
        <OpenButton />
      </GlobalDatePickerProvider>
    </MockForm>
  );
};

const OpenButton = () => {
  const { handleOpen } = useGlobalDatePicker();

  return (
    <button onClick={handleOpen} type="button">
      Click me to open the date picker!
    </button>
  );
};
