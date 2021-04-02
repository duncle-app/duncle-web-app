import Library from "../../../model/library";
import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Table from "../../elements/Table/Table";
import { useHistory } from "react-router-dom";
import { useLibraryPouch } from "../../../common/hooks/UsePouch";
import { useLibraryState } from "../../../common/providers/LibraryProvider";
import useLibraries from "../../../common/queries/useLibraries";

type PouchRow = {
  doc?: any;
  id: string;
  key: string;
  value: {
    rev: string;
    deleted?: boolean;
  };
};

export default function () {
  const { data: libraries, isLoading, isSuccess, error } = useLibraries();
  console.log({ libraries });
  const { setCurrentLibrary } = useLibraryState();
  const history = useHistory();

  if (isLoading) return <h1>Loading...</h1>;

  function routeToLibraryDetail(library: Library): void {
    history.push(`/library/${library._id}`);
    setCurrentLibrary(library);
  }

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {isSuccess && (
        <Grid container justify="center">
          <Grid item xs={11}>
            <Card variant="outlined">
              {/*@ts-ignore - react query is returning Library[] | undefined*/}
              <Table libraries={libraries} onEdit={routeToLibraryDetail} />
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
