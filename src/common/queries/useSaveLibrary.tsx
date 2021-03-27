import PouchDB from "pouchdb";
import React, { useContext } from "react";
import { Library } from "../../model";
import { cloneDeep, isEmpty, isEqual } from "lodash";
import { roundDecimals, usePouch } from "../hooks/UsePouch";
import { GlobalContext } from "../GlobalContext";
import { useMutation } from "react-query";
import { useNotification } from "../../components/atoms/Snackbar/Snackbar";

export default () => {
  const { currentLibrary } = useContext(GlobalContext);
  const { getAuthenticatedUser } = useContext(GlobalContext);
  const { setSuccess, setInfo, setError } = useNotification();

  const USER_DB_PREFIX = "user_";
  const { localPouch } = usePouch(
    `${USER_DB_PREFIX}${getAuthenticatedUser().username}`
  );

  // @ts-ignore
  const saveLibrary = (library: Library): Promise<void> => {
    // this is done just to get the _rev and _id, since our form doesn't store that info
    library = { ...currentLibrary, ...library };

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
  };

  return useMutation(["saveLibrary"], saveLibrary, {
    onSuccess: (_, library) => {
      // todo - update the queryCache to use this new saved library
      // i.e. queryCache.currentLibrary = library
      setSuccess("Successfully saved library");
    },
    onError: (e) => {
      setError(`${e}`);
    },
  });
};

// return await localPouch.get(response.id);
// throw new Error(`Failed to save the library: ${err}`);
