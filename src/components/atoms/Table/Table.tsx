import React from 'react'
import MaterialTable from "material-table";
import {Library} from "../../../model";
import {tableIcons} from "../../../common/tableIcons";

type TableProps = {
    columns: object[];
    libraries: Library[];
}

export default ({columns, libraries}: TableProps) => (
    <>
        <MaterialTable
            title="Libraries"
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
                    onClick: (event, rowData) => onLibraryClick(rowData)
                }
            ]}
        />
    </>
)
