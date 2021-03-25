import React from "react";
import { LogInForm } from "./LogInForm";
import MockForm from "../../storybook-mocks/mockForm";
import { BrowserRouter } from "react-router-dom";

export default {
  title: `Organisms/LogInForm`,
  component: LogInForm,
};

export const withProps = () => (
  <MockForm>
    <BrowserRouter>
      <LogInForm />
    </BrowserRouter>
  </MockForm>
);
