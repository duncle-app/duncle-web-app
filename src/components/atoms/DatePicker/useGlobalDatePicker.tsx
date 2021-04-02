import { useGlobalDatePickerState } from "../../../common/providers/GlobalDatePickerProvider";
import { LastContactType } from "../../../model/newLibrary";
import { useLibraryState } from "../../../common/providers/LibraryProvider";
import useSaveLibraryQuery from "../../../common/queries/useSaveLibraryQuery";
import Library from "../../../model/library";
import { useEffect, useState } from "react";

interface ReturnProps {
  handleOpen(contactType: LastContactType): void;
  handleClose(): void;
  handleSubmit(nextAppointment: string): void;
}

export default (): ReturnProps => {
  const [isReset, setReset] = useState<boolean>(false);
  const { setOpen } = useGlobalDatePickerState();
  let currentContactType: LastContactType | undefined;
  const { currentLibrary } = useLibraryState();
  const { mutate: saveLibrary, isSuccess } = useSaveLibraryQuery();

  /**
   * The sole reason for needing this is this usecase:
   * 1. Enter the a page (view library) where there are this hook is used (i.e. date picker buttons)
   * 2. Click on a button, so a DP Dialog pops up
   * 3. Choose a date and submit
   * 4. Repeat step 2, but without this, if we want to close and ONLY check for isSuccess,
   * the page will re-render and call handleClose every single time, since isSuccess never gets reset.
   *
   * So this is just a workaround to be able to automatically close the Dialog once there's a success
   */
  useEffect(() => {
    setReset(isSuccess);
  }, [isSuccess]);

  const handleOpen = (contactType: LastContactType) => {
    setOpen(true);
    currentContactType = contactType;
  };

  const handleClose = () => {
    setOpen(false);
    currentContactType = undefined;
  };

  if (isSuccess && isReset) {
    handleClose();
    setReset(false);
  }

  const handleSubmit = (nextAppointment: string) => {
    let editedLibrary: Library = { ...currentLibrary };
    editedLibrary.dateNextContact = nextAppointment;
    editedLibrary.lastContactType = currentContactType;

    console.log({ currentLibrary });
    // todo - also save note
    saveLibrary(editedLibrary);
  };

  return { handleOpen, handleClose, handleSubmit };
};
