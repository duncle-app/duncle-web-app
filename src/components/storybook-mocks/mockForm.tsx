import React from "react";
import { Form } from "react-final-form";
import { action } from "@storybook/addon-actions";

// todo - make all forms like this, so I don't have to copy pasta everything
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
