import { usePouch } from "../hooks/UsePouch";
import { useQuery } from "react-query";
import { useNotification } from "../../components/atoms/Snackbar/Snackbar";
import useAuth from "../hooks/Auth/useAuth";

export default (uuid: string) => {
  const { getAuthenticatedUser } = useAuth();
  const { setError } = useNotification();

  const USER_DB_PREFIX = "user_";
  const { localPouch } = usePouch(
    `${USER_DB_PREFIX}${getAuthenticatedUser().username}`
  );

  const fetchSingleDoc = () => localPouch.get(uuid);

  return useQuery(["getLibrary", uuid], fetchSingleDoc, {
    onError: () => {
      setError(`Couldn't find a matching record for ID: ${uuid}`);
    },
  });
};
