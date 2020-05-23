import Library from "../model/library";
import React from "react";
import {Card, CardHeader} from "@material-ui/core";
import useStyles from "../global-styles";
import Grid from "@material-ui/core/Grid/Grid";
import MaterialTable from "material-table";

interface LibraryListProps {
    libraries: Library[];
    onLibraryClick(library: Library): void;
    onAddLibraryClick(): void;
    showAddLibraryComponent: boolean;
    onAddLibraryCancel(): void;
    onAddLibrarySubmit(library: Library): void;
}

function LibraryList(props: LibraryListProps) {
    const {onLibraryClick, libraries} = props;
    const {cardHeader} = useStyles();
    const tableColumns = [
        {title: "Library", field: "libraryName"},
        {title: "Contact", field: "contact.firstName"},
        {title: "Phone", field: "contact.phoneNumber"}
    ];
    return (
        <div>
            <Grid container justify="center">
                <Grid item xs={10}>
                    <Card variant="outlined">
                        <CardHeader title="Libraries" className={cardHeader}/>
                        <MaterialTable
                            title="Libraries"
                            columns={tableColumns}
                            data={libraries}
                            actions={[
                                {
                                    icon: 'create',
                                    tooltip: 'Edit User',
                                    // @ts-ignore
                                    onClick: (event, rowData) => onLibraryClick(rowData)
                                }
                            ]}
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default LibraryList;
