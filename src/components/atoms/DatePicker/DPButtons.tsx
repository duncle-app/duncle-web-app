import React from "react";
import ComputerIcon from "@material-ui/icons/Computer";
import GroupIcon from "@material-ui/icons/Group";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import Button from "@material-ui/core/Button";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon/SvgIcon";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap>;
}

const IconWrapper = ({ Icon }: Props) => (
  <Button variant="outlined">
    <Icon />
  </Button>
);

export const ContactedByEmail = () => <IconWrapper Icon={ComputerIcon} />;

export const ContactedInPerson = () => <IconWrapper Icon={GroupIcon} />;

export const ContactedByPhone = () => <IconWrapper Icon={PhoneForwardedIcon} />;
