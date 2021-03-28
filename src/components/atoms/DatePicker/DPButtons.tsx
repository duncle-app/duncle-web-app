import React, { PropsWithChildren } from "react";
import ComputerIcon from "@material-ui/icons/Computer";
import GroupIcon from "@material-ui/icons/Group";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import Button from "@material-ui/core/Button";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon/SvgIcon";
import useGlobalDatePicker from "./useGlobalDatePicker";
import { GlobalDatePickerProvider } from "../../../common/providers/GlobalDatePickerProvider";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
`;

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap>;
}

/**
 * Slight overkill, but this makes sure the GlobalDatePickerProvider ALWAYS ships with
 * the icon buttons.
 * @param Icon the icon you want to display on the button
 */
const IconWrapper = ({ Icon }: Props) => (
  <GlobalDatePickerProvider>
    <IconButton Icon={Icon} />
  </GlobalDatePickerProvider>
);

const IconButton = ({ Icon }: Props) => {
  const { handleOpen } = useGlobalDatePicker();
  return (
    <Button variant="outlined" onClick={handleOpen}>
      <Icon />
    </Button>
  );
};

const ContactedByEmail = () => <IconWrapper Icon={ComputerIcon} />;
const ContactedInPerson = () => <IconWrapper Icon={GroupIcon} />;
const ContactedByPhone = () => <IconWrapper Icon={PhoneForwardedIcon} />;

export const ContactButtonsRow = () => (
  <Flex>
    <ContactedByPhone />
    <ContactedByEmail />
    <ContactedInPerson />
  </Flex>
);
