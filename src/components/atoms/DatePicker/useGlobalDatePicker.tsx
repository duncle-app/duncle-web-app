import { useGlobalDatePickerState } from "../../../common/providers/GlobalDatePickerProvider";

interface ReturnProps {
  handleOpen(): void;
  handleClose(): void;
}

export default (): ReturnProps => {
  const { setOpen } = useGlobalDatePickerState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return { handleOpen, handleClose };
};
