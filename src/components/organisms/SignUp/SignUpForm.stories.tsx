import React from "react";
import MockForm from "../../storybook-mocks/mockForm";
import { SignUpForm } from "./SignUpForm";

export default {
  title: "Organisms/SignUpForm",
  component: SignUpForm,
};

export const withProps = () => (
  <MockForm>
    <SignUpForm />
  </MockForm>
);
