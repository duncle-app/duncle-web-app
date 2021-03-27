import React, { useContext } from "react";
import { GlobalContext } from "../../../common/GlobalContext";
import EditLibrary from "../../library-edit/components/EditLibrary";
import useSaveLibrary from "../../../common/queries/useSaveLibrary";
import Library from "../../../model/library";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Form from "../../../common/Form";
import { Grid } from "@material-ui/core";
import CustomTextField from "../../atoms/TextField/CustomTextField";
import FormSubmitButton from "../../atoms/Button/FormSubmitButton";
import useStyles from "../../../global-styles";
import generateEditLibraryFormLabels from "./generateEditLibraryFormLabels";

export default function EditLibraryController() {
  const { currentLibrary } = useContext(GlobalContext);
  const { mutate: saveLibrary, isSuccess } = useSaveLibrary();
  const history = useHistory();
  const { content, editLibrary } = useStyles();

  if (isSuccess) {
    history.goBack();
  }

  const formLabels = generateEditLibraryFormLabels(currentLibrary);

  return (
    <Paper className={content}>
      <Form onSubmit={(editedLibrary: Library) => saveLibrary(editedLibrary)}>
        <Grid container>
          {formLabels.map(({ label, currentValue, isRequired }, index) => {
            return (
              <Grid xs={6} className={editLibrary} key={`${label}-${index}`}>
                <CustomTextField
                  key={`${label}-${index}`}
                  name={label}
                  defaultValue={currentValue}
                  alsoInitialValue
                  fullWidth={true}
                  isRequired={isRequired}
                />
              </Grid>
            );
          })}
        </Grid>
        <FormSubmitButton DisplayText="Save Library" />
      </Form>
    </Paper>
  );
}
