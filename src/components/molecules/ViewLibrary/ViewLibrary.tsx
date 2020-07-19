import React from "react";
import Library from "../../../model/library";
import OpDrawer from "../../library-detail/components/OpDrawer";

interface LibraryDetailProps {
  library: Library;

  onBack(): void;

  onEdit(library: Library): void;
}

function ViewLibrary(props: LibraryDetailProps) {
  return (
    <>
      <div>
        <button onClick={props.onBack}>Back</button>
        <button onClick={() => props.onEdit(props.library)}>Edit</button>
      </div>

      <OpDrawer library={props.library} />
    </>
  );
}

export default ViewLibrary;
