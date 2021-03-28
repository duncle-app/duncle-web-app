import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import GlobalDatePicker from "../../components/atoms/DatePicker/GlobalDatePicker";

interface GlobalDatePickerContextState {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const GlobalDatePickerContext = createContext<
  GlobalDatePickerContextState | undefined
>(undefined);

export const GlobalDatePickerProvider = ({
  children,
}: PropsWithChildren<any>) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <GlobalDatePickerContext.Provider
      value={{
        isOpen,
        setOpen,
      }}
    >
      <GlobalDatePicker />
      {children}
    </GlobalDatePickerContext.Provider>
  );
};

/**
 * WARNING: This should only be used in the useGlobalDatePicker hook.
 * Use the functions provided in useGlobalDatePicker instead
 */
export function useGlobalDatePickerState() {
  const context = useContext(GlobalDatePickerContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalDatePickerState must be used within the GlobalDatePickerProvider"
    );
  }

  return context;
}
