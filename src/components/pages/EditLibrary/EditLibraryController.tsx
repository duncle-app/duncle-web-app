import React, { useContext } from "react";
import { GlobalContext } from "../../../common/GlobalContext";
import EditLibrary from "../../library-edit/components/EditLibrary";
import useSaveLibrary from "../../../common/queries/useSaveLibrary";
import Library from "../../../model/library";
import { useHistory } from "react-router-dom";

export default function EditLibraryController() {
  const { currentLibrary } = useContext(GlobalContext);
  const { mutate: saveLibrary, isSuccess } = useSaveLibrary();
  const history = useHistory();

  if (isSuccess) {
    history.goBack();
  }

  return (
    <EditLibrary
      library={currentLibrary}
      formSubmit={(editedLibrary: Library) => {
        saveLibrary(editedLibrary);
      }}
    />
  );
}
