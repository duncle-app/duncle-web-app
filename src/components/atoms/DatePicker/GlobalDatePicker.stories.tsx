import React from "react";
import useGlobalDatePicker from "./useGlobalDatePicker";
import GlobalProvider from "../../../common/providers/GlobalProvider";
import GlobalDatePicker from "./GlobalDatePicker";
import { LocalStorageMockProvider } from "../../storybook-mocks/MockProviders";

export default {
  title: "Atoms/GlobalDatePicker",
};

export const Default = () => {
  return (
    <GlobalProvider>
      <LocalStorageMockProvider>
        <GlobalDatePicker contactType="email" />
        <OpenButton />
      </LocalStorageMockProvider>
    </GlobalProvider>
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
