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
import useUpdateLibrary from "../../../common/hooks/useUpdateLibrary";
import noop from "../../../utils/noop";

export default function () {
  const { paddingTwo, longWidth } = useStyles();
  const { submitNewNote } = useUpdateLibrary();

  const onNoAnswer = () => submitNewNote({ newNote: "Called, but no answer." });

  return (
    // todo - fix? TextArea uses a form, but I don't actually use the form...
    <Form onSubmit={noop}>
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
