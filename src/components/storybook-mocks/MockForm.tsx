import React, { PropsWithChildren } from "react";
import { Form } from "react-final-form";
import { action } from "@storybook/addon-actions";

export default ({ children }: PropsWithChildren<any>) => (
  <Form
    onSubmit={action("submit")}
    render={({ handleSubmit }) => (
      <>
        <form onSubmit={handleSubmit}>{children}</form>
      </>
    )}
  />
);
