import React from "react";
import Library from "../../../model/library";
import { Grid } from "@material-ui/core";
import CustomTextField from "../../atoms/TextField/CustomTextField";
import FormSubmitButton from "../../atoms/Button/FormSubmitButton";

interface LibraryEditProps {
  library: Library;
}

export default function LibraryEdit(props: LibraryEditProps) {
  const {
    address,
    city,
    county,
    level,
    libraryName,
    size,
    state,
    zip,
  } = props.library;
  console.log("Library edit", props.library);

  const formLabels = [
    {
      identifier: "libraryName",
      label: "Library Name",
      propName: libraryName,
    },
    {
      identifier: "address",
      label: "Address",
      propName: address,
    },
    {
      identifier: "city",
      label: "City",
      propName: city,
    },
    {
      identifier: "state",
      label: "State",
      propName: state,
    },
    {
      identifier: "zip",
      label: "Zip",
      propName: zip,
    },
    {
      identifier: "county",
      label: "County",
      propName: county,
    },
    {
      identifier: "level",
      label: "Level",
      propName: level,
    },
    {
      identifier: "size",
      label: "Size",
      propName: size,
    },
  ];

  return (
    <>
      <Grid container direction="column" spacing={1}>
        <div>Library Edit</div>
        {formLabels.map((field) => {
          return (
            <CustomTextField
              name={field.label}
              isRequired
            />
          );
        })}
      </Grid>
      <FormSubmitButton DisplayText="Save Library"/>
    </>
  );
}
