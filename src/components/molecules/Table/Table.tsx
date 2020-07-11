import React from 'react'
import MaterialTable from "material-table";
import {Library} from "../../../model";
import {tableIcons} from "../../../common/tableIcons";
import {CardHeader} from "@material-ui/core";
import useStyles from "../../../global-styles";

type TableProps = {
    columns: object[];
    libraries: Library[];
    onEdit?(): void;
}
export default ({columns, libraries, onEdit}: TableProps) => {
    const {cardHeader} = useStyles();

    return (
        <>
            <CardHeader title="Libraries" className={cardHeader}/>
            <MaterialTable
                title=" "
                columns={columns}
                data={libraries}
                // @ts-ignore
                icons={tableIcons}
                actions={[
                    {
                        // @ts-ignore
                        icon: tableIcons.Create,
                        tooltip: 'Edit User',
                        // @ts-ignore
                        onClick: (event, rowData) => onEdit() //onLibraryClick(rowData)
                    }
                ]}
            />
        </>
    )
}
