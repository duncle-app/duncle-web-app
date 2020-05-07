import { Library } from "../model/library";
import LibraryOverview from "./components/library-overview";
import React from "react";
import AddLibrary from "./components/add-library";
import { Divider, Card, CardHeader, CardContent } from "@material-ui/core";
import useStyles from "../global-styles";
import Grid from "@material-ui/core/Grid/Grid";
interface LibraryListProps {
  libraries: Library[];
  onLibraryClick(library: Library): void;
  onAddLibraryClick(): void;
  showAddLibraryComponent: boolean;
  onAddLibraryCancel(): void;
  onAddLibrarySubmit(library: Library): void;
}

function LibraryList(props: LibraryListProps) {
  const {
    onLibraryClick,
    libraries,
  } = props;

  const { cardHeader } = useStyles();



  return (
    <div>
      <Grid container justify="center">
          <Grid item xs={10}>
              <Card variant="outlined">
                  <CardHeader title="Libraries" className={cardHeader} />
                  <CardContent>
                      {libraries.map((lib: Library) => (
                          <>
                              <LibraryOverview
                                  library={lib}
                                  key={lib.id}
                                  onClick={onLibraryClick}
                              />
                              <Divider />
                          </>
                      ))}
                  </CardContent>
              </Card>
          </Grid>
      </Grid>
    </div>
  );
}

export default LibraryList;
