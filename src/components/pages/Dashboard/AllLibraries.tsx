import Library from "../../../model/library";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import useStyles from "../../../global-styles";
import Grid from "@material-ui/core/Grid/Grid";
import Table from "../../molecules/Table/Table";
import { useHistory } from "react-router-dom";
import { useLibraryPouch } from "../../../common/hooks/UsePouch";
import { NoLibrary } from "../../storybook-mocks/constants";
import { GlobalContext } from "../../../common/GlobalContext";

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
  const [libraries, setLibraries] = useState<Library[]>([]);
  const { setCurrentLibrary } = useContext(GlobalContext);
  const { getAll } = useLibraryPouch();
  const history = useHistory();

  useEffect(() => {
    async function doLibraryCall() {
      const response = await getAll();
      let libraries: Library[] = [];

      response.rows.map(({ doc }: PouchRow) => {
        libraries.push(doc);
      });

      setLibraries(libraries);
      console.log("all libraries", libraries);
    }
    doLibraryCall();
  }, []);

  function routeToLibraryDetail(library: Library): void {
    history.push(`/library/${library._id}`);
    setCurrentLibrary(library);
  }

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={11}>
          <Card variant="outlined">
            <Table libraries={libraries} onEdit={routeToLibraryDetail} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
