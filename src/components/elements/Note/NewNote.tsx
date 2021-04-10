import React from "react";
import Form from "../../../common/Form";
import Paper from "@material-ui/core/Paper";
import TextArea from "../../atoms/TextArea/TextArea";
import Button from "@material-ui/core/Button";
import useStyles from "../../../global-styles";
import PhoneDisabled from "@material-ui/icons/PhoneDisabled";
import { ContactButtonsRow } from "../../atoms/DatePicker/DPButtons";
import FlexCenter from "../../../common/styles/FlexCenter";
import Title from "../../styles/Title";

interface props {
  // @ts-ignore
  formSubmit(props): any;
}

export default function ({ formSubmit }: props) {
  const { paddingTwo, longWidth } = useStyles();

  const onNoAnswer = () => formSubmit({ newNote: "Called, but no answer." });

  return (
    <Form onSubmit={formSubmit}>
      <Title>Create Notes</Title>
      <Paper className={paddingTwo}>
        <TextArea
          className={longWidth}
          name="New Note"
          placeholderText="Enter a new note here"
        />
        <FlexCenter>
          <div className={paddingTwo}>
            <ContactButtonsRow />
            <Button variant="outlined" onClick={onNoAnswer}>
              No Answer{" "}
              <PhoneDisabled style={{ color: "red", paddingLeft: ".1em" }} />
            </Button>
          </div>
        </FlexCenter>
      </Paper>
    </Form>
  );
}
