import React from "react";
import useStyles from "../../../global-styles";
import Library from "../../../model/library";
import {ListItem, List, Divider, ListItemText} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";

interface drawerProps {
    library: Library;
}

export default ({library}: drawerProps) => {
    const {muiDrawer, drawerPaper} = useStyles()

    const {libraryName, city, state, street, zip, email, librarian, phoneNumber} = library;
    return (
        <Drawer
            className={muiDrawer}
            variant="permanent"
            classes={{
                paper: drawerPaper,
            }}
            anchor="left"
        >
            <div>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={libraryName}
                            secondary={` ${street} ${city}, ${state}, ${zip}`}
                            primaryTypographyProps={{variant: "h4"}}
                        />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText
                            primary="Contacts"
                            primaryTypographyProps={{variant: "h4"}}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={`${librarian}`}
                            secondary={`${email} ${phoneNumber}`}
                        />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

