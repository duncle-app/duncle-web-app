import React, { useContext } from "react";
import ContactDrawer from "../../elements/ContactDrawer/ContactDrawer";
import { useHistory, useParams } from "react-router-dom";
import NoteList from "../../elements/NoteList/NoteList";
import useStyles from "../../../global-styles";
import SalesArea from "../../atoms/Sales/SalesArea";
import NewNote from "../../elements/Note/NewNote";
import { GlobalContext } from "../../../common/GlobalContext";
import { NoLibrary } from "../../storybook-mocks/constants";
import { Grid } from "@material-ui/core";
import DefaultButton from "../../atoms/Button/DefaultButton";
import useUpdateLibrary from "../../../common/hooks/useUpdateLibrary";

interface p {
  libraryId: string;
}

export default () => {
  const { content, alignToDrawer, paddingOne, paddingTopTiny } = useStyles();
  const { currentLibrary } = useContext(GlobalContext);
  const {
    handleNewAppointment,
    addSale,
    submitNewNote,
    submitNewEditableNote,
    totalSales,
    lastSale,
  } = useUpdateLibrary();

  const { libraryId }: p = useParams();
  let history = useHistory();

  function onBack(): void {
    history.goBack();
  }

  if (currentLibrary === NoLibrary) {
    onBack();
  }

  function onEdit(id: string): void {
    history.push(`/library/${id}/edit`);
  }

  return (
    <div className={alignToDrawer}>
      <div className={paddingTopTiny}>
        <DefaultButton onClick={onBack}>Back</DefaultButton>
        <DefaultButton onClick={() => onEdit(libraryId)}>Edit</DefaultButton>
      </div>
      <ContactDrawer
        library={currentLibrary}
        handleScheduleNextAppointment={handleNewAppointment}
      />
      <main className={content}>
        <Grid container>
          <Grid item xs={6}>
            <div className={paddingOne}>
              <SalesArea
                totalSales={totalSales}
                lastSale={lastSale}
                addSale={addSale}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={paddingOne}>
              <NewNote formSubmit={submitNewNote} />
            </div>
          </Grid>
        </Grid>
        <NoteList
          notes={currentLibrary.notes}
          SubmitForm={submitNewEditableNote}
        />
      </main>
    </div>
  );
};
