import React from "react";
import EditableNote from "../Note/EditableNote";
import NoteDAO from "../../../model/noteDAO";
import { createNewNote } from "../../../utils/noteUtils";
import styled from "styled-components";
import useSaveLibraryQuery from "../../../common/queries/useSaveLibraryQuery";
import Library from "../../../model/library";

const Title = styled.h2`
  font-size: 1.7rem;
`;

interface Props {
  library: Library;
}

export default ({ library }: Props) => {
  console.log("original library", library);
  const { mutate: saveLibrary } = useSaveLibraryQuery();

  const { message, dateCreated, id, author }: NoteDAO = library.personalNotes
    ? library.personalNotes
    : createNewNote("No notes recorded", library.assignedRep);

  // this comes from the note form
  const onSubmit = (note: any) => {
    const editedLibrary: Library = { ...library, personalNotes: note };

    console.log({ library });
    saveLibrary(editedLibrary);
  };

  return (
    <div>
      <Title>Personal Details</Title>
      <EditableNote
        message={message}
        author={author}
        dateCreated={dateCreated}
        id={id}
        SubmitForm={onSubmit}
      />
    </div>
  );
};
