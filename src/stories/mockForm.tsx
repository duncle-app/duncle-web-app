import React from "react";
import { Form } from "react-final-form";
import { action } from "@storybook/addon-actions";

function MockForm(props: any) {
  const mockSubmit = (e: any) => action(e.target.values);
  return (
    <Form
      onSubmit={() => mockSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>{props.children}</form>
        </>
      )}
    />
  );
}

export default MockForm;
