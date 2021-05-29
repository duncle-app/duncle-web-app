import Library from "../../../model/library";
import React from "react";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Table from "../../elements/Table/Table";
import { useHistory } from "react-router-dom";
import useLibraries from "../../../common/queries/useLibraries";
import useAdminLibraries from "../../../common/queries/useAdminLibraries";

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
  const x = useAdminLibraries();
  const { data: libraries, isLoading, isSuccess, error } = useLibraries();
  const history = useHistory();

  let allLibs: Library[] = [];
  x?.map((otherLibs) => {
    if (otherLibs.isSuccess && otherLibs.data) {
      allLibs.push(...otherLibs.data);
    }
  });

  if (libraries) {
    allLibs = [...allLibs, ...libraries];
  }

  if (isLoading) return <h1>Loading...</h1>;

  function routeToLibraryDetail(library: Library): void {
    history.push(`/library/${library._id}`);
  }

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {isSuccess && (
        <Grid container justify="center">
          <Grid item xs={11}>
            <Card variant="outlined">
              {allLibs?.length ? (
                <Table libraries={allLibs} onEdit={routeToLibraryDetail} />
              ) : (
                <>
                  <h1>No Libraries found!</h1>
                  <h3>Start by adding a new library</h3>
                </>
              )}
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
