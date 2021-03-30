import React from "react";
import ContactDrawer from "../../elements/ContactDrawer/ContactDrawer";
import { useHistory, useParams } from "react-router-dom";
import NoteList from "../../elements/NoteList/NoteList";
import useStyles from "../../../global-styles";
import SalesArea from "../../atoms/Sales/SalesArea";
import NewNote from "../../elements/Note/NewNote";
import { Grid } from "@material-ui/core";
import DefaultButton from "../../atoms/Button/DefaultButton";
import useUpdateLibrary from "../../../common/hooks/useUpdateLibrary";
import useLibraryQuery from "../../../common/queries/useLibraryQuery";

interface p {
  libraryId: string;
}

export default () => {
  const { content, alignToDrawer, paddingOne, paddingTopTiny } = useStyles();
  let { libraryId } = useParams<{ libraryId: string }>();

  const { data: currentLibrary, isSuccess, error, isLoading } = useLibraryQuery(
    libraryId
  );

  const {
    handleNewAppointment,
    addSale,
    submitNewNote,
    submitNewEditableNote,
  } = useUpdateLibrary();

  let history = useHistory();

  if (isLoading) return <h1>Loading...</h1>;

  function onBack(): void {
    history.goBack();
  }

  function onEdit(id: string): void {
    history.push(`/library/${id}/edit`);
  }

  console.log({ currentLibrary });

  return (
    <>
      {error && <h2>Error loading: ${error}</h2>}
      {isSuccess && (
        <div className={alignToDrawer}>
          <div className={paddingTopTiny}>
            <DefaultButton onClick={onBack}>Back</DefaultButton>
            <DefaultButton onClick={() => onEdit(libraryId)}>
              Edit
            </DefaultButton>
          </div>
          <ContactDrawer
            library={currentLibrary}
            handleScheduleNextAppointment={handleNewAppointment}
          />
          <div className={content}>
            <Grid container>
              <Grid item xs={6}>
                <div className={paddingOne}>
                  <SalesArea
                    totalSales={currentLibrary.totalSales}
                    lastSale={currentLibrary.lastSale}
                    addSale={({ newSale }) => addSale(newSale, currentLibrary)}
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
          </div>
        </div>
      )}
    </>
  );
};
