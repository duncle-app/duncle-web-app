import React from "react";
import useGlobalDatePicker from "./useGlobalDatePicker";
import GlobalProvider from "../../../common/providers/GlobalProvider";
// @ts-ignore
import { LocalStorageMock } from "@react-mock/localstorage";
import { mockToken } from "../../storybook-mocks/constants";
import GlobalDatePicker from "./GlobalDatePicker";

export default {
  title: "Atoms/GlobalDatePicker",
};

export const Default = () => {
  return (
    <GlobalProvider>
      <LocalStorageMock items={{ authCredentials: mockToken }}>
        <GlobalDatePicker contactType="email" />
        <OpenButton />
      </LocalStorageMock>
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
