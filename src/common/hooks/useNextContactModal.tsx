import noop from "../../utils/noop";
import { cloneDeep, isEqual } from "lodash";
import { useNotification } from "../../components/atoms/Snackbar/Snackbar";
import { useLibraryPouch } from "./UsePouch";
import Library from "../../model/library";
import useSaveLibrary from "../queries/useSaveLibrary";
import library from "../../model/library";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

interface Props {
  optionalCallback?: Function;
  library: Library;
  nextAppointmentDate: string;
}

interface ReturnProps {
  handleScheduleNextContact(p: Props): void;
}

export default (): ReturnProps => {
  const { currentLibrary } = useContext(GlobalContext);

  const x = useSaveLibrary();

  // just return a noop if no callback was defined
  const handleScheduleNextContact = async ({
    nextAppointmentDate,
    optionalCallback = noop(),
  }: Props) => {
    currentLibrary.dateNextContact = nextAppointmentDate;
    x.mutate(currentLibrary);

    optionalCallback();
  };

  return { handleScheduleNextContact };
};
