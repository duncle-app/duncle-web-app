import React from "react";
import Form from "../../../common/Form";
import { Paper } from "@material-ui/core";
import TextArea from "../../atoms/TextArea/TextArea";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Button from "@material-ui/core/Button";
import DefaultButton from "../../atoms/Button/DefaultButton";
import useStyles from "../../../global-styles";
import { PhoneDisabled } from "@material-ui/icons";
import { ContactButtonsRow } from "../../atoms/DatePicker/DPButtons";

interface props {
  // @ts-ignore
  formSubmit(props): any;
}

export default function ({ formSubmit }: props) {
  const { paddingTwo, longWidth } = useStyles();

  const onNoAnswer = () => formSubmit({ newNote: "Called, but no answer." });

  return (
    <Form onSubmit={formSubmit}>
      <Paper className={paddingTwo}>
        <div>
          <TextArea
            className={longWidth}
            name="New Note"
            placeholderText="Enter a new note here"
          />
          <ContactButtonsRow />
          <div className={paddingTwo}>
            <Button variant="outlined" onClick={onNoAnswer}>
              No Answer{" "}
              <PhoneDisabled style={{ color: "red", paddingLeft: ".1em" }} />
            </Button>
          </div>
        </div>
      </Paper>
    </Form>
  );
}
