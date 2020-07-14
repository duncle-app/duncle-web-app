import React from "react";
import useStyles from "../../../global-styles";
import Library from "../../../model/library";
import { ListItem, List, Divider, ListItemText } from "@material-ui/core";

interface drawerProps {
  library: Library;
}

export default ({ library }: drawerProps) => {
  const { drawer } = useStyles();

  const { libraryName, city, state, street, contact } = library;
  const { emailAddress, librarian, phoneNumber } = contact;
  return (
    <div className={drawer}>
      <List>
        <ListItem>
          <ListItemText
            primary={libraryName}
            secondary={` ${street} ${city}, ${state}`}
            primaryTypographyProps={{ variant: "h4" }}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Contacts"
            primaryTypographyProps={{ variant: "h4" }}
          />
        </ListItem>
        {}
        <ListItem>
          <ListItemText
            primary={`${librarian}`}
            secondary={`${emailAddress} ${phoneNumber}`}
          />
        </ListItem>
      </List>
    </div>
  );
};

