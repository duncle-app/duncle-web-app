import { useGlobalDatePickerState } from "../../../common/providers/GlobalDatePickerProvider";
import { LastContactType } from "../../../model/newLibrary";
import { useLibraryState } from "../../../common/providers/LibraryProvider";
import useSaveLibraryQuery from "../../../common/queries/useSaveLibraryQuery";
import Library from "../../../model/library";

interface ReturnProps {
  handleOpen(): void;
  handleClose(): void;
  handleSubmit(nextAppointment: string, contactType: LastContactType): void;
}

export default (): ReturnProps => {
  const { setOpen } = useGlobalDatePickerState();
  const { currentLibrary } = useLibraryState();
  const { mutate: saveLibrary } = useSaveLibraryQuery();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (
    nextAppointment: string,
    contactType: LastContactType
  ) => {
    let editedLibrary: Library = { ...currentLibrary };
    editedLibrary.dateNextContact = nextAppointment;
    editedLibrary.lastContactType = contactType;

    console.log("made it into date picker");
    console.log({ currentLibrary });
    // todo - also save note
    saveLibrary(editedLibrary);
  };

  return { handleOpen, handleClose, handleSubmit };
};
