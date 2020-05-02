import { Library } from "../model/library";
import LibraryOverview from "./components/library-overview";
import React from "react";
import AddLibrary from "./components/add-library";
import { Divider, Card, CardHeader, CardContent } from "@material-ui/core";
import useStyles from "../global-styles";
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
    showAddLibraryComponent,
    onLibraryClick,
    onAddLibraryCancel,
    onAddLibrarySubmit,
    onAddLibraryClick,
    libraries,
  } = props;

  const { cardHeader } = useStyles();

  return (
    <div>
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
    </div>
  );
}

export default LibraryList;
