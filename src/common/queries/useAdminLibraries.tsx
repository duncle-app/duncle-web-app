import React from "react";
import useAuth from "../hooks/Auth/useAuth";
import { useQuery } from "react-query";
import { allLibrariesKey } from "../constants/queryKeys";
import { usePouch, USER_DB_PREFIX } from "../hooks/UsePouch";
import { AllLibrariesResponse, parseToLibraries } from "./queriesUtils";
import Library from "../../model/library";
import { useNotification } from "../../components/atoms/Snackbar/Snackbar";

export default () => {
  const { getAuthenticatedUser } = useAuth();
  const { setError } = useNotification();
  const currentUser = getAuthenticatedUser();
  // Only admins should go next
  if (currentUser?.role !== "admin") return null;

  // todo - have these as an env var that can easily be swapped out?
  const otherUserIds = ["sam", "jim"];
  return otherUserIds.map((person) => {
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
  /**
   * Get other user IDs here
   * We can (should) check if they even exist
   * if they don't, maybe even send me a slack message?
   * else, query for those libraries like we do with useLibraries
   * return them from this hook
   */

  return null;
};
