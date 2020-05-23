import React from "react";
/* import { Library } from "../../model"; */
import EditField from "../../library-edit/components/EditField";

export default {
  title: "Edit Field",
  component: EditField,
};

export const Props = () => <EditField label="Name" id="1" value="Mr. Sir" />;

export const noProps = () => <EditField />;
