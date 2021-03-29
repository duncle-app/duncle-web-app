import React, { useContext } from "react";
import { Library } from "../../model";
import { isEmpty, isEqual } from "lodash";
import { roundDecimals, usePouch } from "../hooks/UsePouch";
import { GlobalContext } from "../GlobalContext";
import { useMutation, useQueryClient } from "react-query";
import { useNotification } from "../../components/atoms/Snackbar/Snackbar";
import useAuth from "../hooks/Auth/useAuth";
import { libraryKey, saveLibraryKey } from "../constants/queryKeys";

export default () => {
  const { currentLibrary } = useContext(GlobalContext);
  const { getAuthenticatedUser } = useAuth();
  const { setSuccess, setError } = useNotification();
  const queryClient = useQueryClient();

  const USER_DB_PREFIX = "user_";
  const { localPouch } = usePouch(
    `${USER_DB_PREFIX}${getAuthenticatedUser().username}`
  );

  const saveLibrary = (
    library: Library
  ): Promise<PouchDB.Core.Response | void> => {
    // this is done just to get the _rev and _id, since our form doesn't store that info
    library = { ...currentLibrary, ...library };
    console.log("new lib", library);

    if (isEmpty(library._rev) || library._rev === "norev") {
      throw new Error(`Error code: 51. _rev is undefined. Cannot save library`);
    }
    if (isEmpty(library._id) || library._id === "noid") {
      throw new Error(`Error code: 52. _id is undefined. Cannot save library`);
    }

    roundDecimals(library);

    if (!isEqual(currentLibrary, library)) {
      return localPouch.put(library);
    }
    // no op promise, just so the types don't complain.. probably a better way to do this
    return new Promise(() => Promise.resolve());
  };

  return useMutation(saveLibraryKey, saveLibrary, {
    onSuccess: (response, library) => {
      if (response) {
        const updatedLibrary: Library = {
          ...library,
          _rev: response.rev,
          _id: response.id,
        };
        queryClient.setQueryData(libraryKey(response.id), updatedLibrary);
        queryClient.invalidateQueries(libraryKey(response.id));
        console.log(`invalidated: ${libraryKey(response.id)}`);
      }
      setSuccess("Successfully saved library");
    },
    onError: (e, library) => {
      console.log("save library", library);
      setError(`${e}`);
    },
  });
};

// return await localPouch.get(response.id);
// throw new Error(`Failed to save the library: ${err}`);
