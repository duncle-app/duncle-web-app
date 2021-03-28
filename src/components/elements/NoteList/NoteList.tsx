import React from "react";
import EditableNote from "../Note/EditableNote";
import useStyles from "../../../global-styles";
import NoteDAO from "../../../model/noteDAO";
import { Grid } from "@material-ui/core";

type NoteListProps = {
  notes: NoteDAO[];
  SubmitForm(values: NoteDAO): any;
};

export default function ({ notes, SubmitForm }: NoteListProps) {
  const { paddingOne } = useStyles();
  return (
    <Grid container justify="center">
      {notes &&
        notes.map((props: NoteDAO, index: number) => (
          <Grid item xs={7}>
            <div key={index} className={paddingOne}>
              {/* @ts-ignore */}
              <EditableNote SubmitForm={SubmitForm} {...props} />
            </div>
          </Grid>
        ))}
    </Grid>
  );
}
