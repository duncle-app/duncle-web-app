import { useGlobalDatePickerState } from "../../../common/providers/GlobalDatePickerProvider";
import { LastContactType } from "../../../model/newLibrary";

interface ReturnProps {
  handleOpen(): void;
  handleClose(): void;
  handleSubmit(nextAppointment: string, contactType: LastContactType): void;
}

export default (): ReturnProps => {
  const { setOpen } = useGlobalDatePickerState();

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
    console.log({ nextAppointment });
    console.log({ contactType });
  };

  return { handleOpen, handleClose, handleSubmit };
};
