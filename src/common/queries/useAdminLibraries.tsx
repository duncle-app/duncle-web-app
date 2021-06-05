import React from "react";
import useAuth from "../hooks/Auth/useAuth";
import { useQuery, UseQueryResult } from "react-query";
import { allLibrariesKey } from "../constants/queryKeys";
import { usePouch, USER_DB_PREFIX } from "../hooks/UsePouch";
import { AllLibrariesResponse, parseToLibraries } from "./queriesUtils";
import Library from "../../model/library";
import { useNotification } from "../../components/atoms/Snackbar/Snackbar";
import {
  CheckboxesState,
  useSeeOthersState,
} from "../providers/SeeOthersProvider";

export default () => {
  const { getAuthenticatedUser } = useAuth();
  const currentUser = getAuthenticatedUser();
  // Only admins should go next
  if (currentUser?.role !== "admin") return null;

  const { checked } = useSeeOthersState();
  const { setError } = useNotification();

  let validIdsToQuery: string[] = ["sam", "jim"];

  console.log({ validIdsToQuery });

  return validIdsToQuery.map((person) => {
    // BIG TODO - do not use this hook in a loop..
    // todo - use the same function that cuts off the rest of the email, and only gets the DB name, instead of doing this way?
    const localPouch = usePouch(`${USER_DB_PREFIX}${person}`);

    const fetchAllLibraries = (): AllLibrariesResponse =>
      localPouch.allDocs({ include_docs: true });

    return useQuery([allLibrariesKey, person], fetchAllLibraries, {
      select: (response: AllLibrariesResponse): Library[] =>
        parseToLibraries(response),
      onError: () => {
        setError(`Failed to get list of all libraries for ${person}.`);
      },
    });
  });
};
