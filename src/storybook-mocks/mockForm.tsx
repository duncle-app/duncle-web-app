import React from "react";
import { Form } from "react-final-form";
import { action } from "@storybook/addon-actions";

function MockForm(props: any) {
  return (
    <Form
      onSubmit={action("submit")}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>{props.children}</form>
        </>
      )}
    />
  );
}

export default MockForm;
