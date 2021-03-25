import React, { useContext } from "react";
import { GlobalContext } from "../../../common/GlobalContext";
import EditLibrary, {
  EditLibrarySubmitProps,
} from "../../library-edit/components/EditLibrary";
import { useHistory } from "react-router-dom";
import { useLibraryPouch } from "../../../common/hooks/UsePouch";
import { cloneDeep, isEqual } from "lodash";
import { useNotification } from "../../atoms/Snackbar/Snackbar";

export default function EditLibraryController() {
  const { currentLibrary, setCurrentLibrary } = useContext(GlobalContext);
  const { saveLibrary } = useLibraryPouch();
  const { setSuccess, setInfo, setError } = useNotification();
  const history = useHistory();

  // todo - when clearing a field completely, it thinks no changes were made

  async function saveEditedLibrary(values: EditLibrarySubmitProps) {
    // this contains a subset of the props, and just save those to the new object
    try {
      const copy = cloneDeep(currentLibrary);
      const editedLibrary = Object.assign(currentLibrary, values);

      if (!isEqual(copy, editedLibrary)) {
        // @ts-ignore
        const library = await saveLibrary(editedLibrary);
        setCurrentLibrary(library);
        setSuccess("Successfully saved library");
      } else {
        setInfo("No updates were made, contents were identical");
      }
      // navigate to previous page
      history.goBack();
    } catch (e) {
      setError(e);
    }
  }

  return (
    <EditLibrary library={currentLibrary} formSubmit={saveEditedLibrary} />
  );
}
