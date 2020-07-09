import React, {forwardRef} from 'react'
import MaterialTable from "material-table";
import {Library} from "../../../model";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import Create from "@material-ui/icons/Create";
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export const tableIcons = {
// @ts-ignore
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
// @ts-ignore
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
// @ts-ignore
    Create: forwardRef((props, ref) => <Create {...props} ref={ref} />),
// @ts-ignore
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
// @ts-ignore
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
// @ts-ignore
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
// @ts-ignore
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
// @ts-ignore
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
// @ts-ignore
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
// @ts-ignore
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
// @ts-ignore
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
// @ts-ignore
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
// @ts-ignore
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
// @ts-ignore
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
// @ts-ignore
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
// @ts-ignore
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
// @ts-ignore
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
// @ts-ignore
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

type TableProps = {
    columns: object[];
    libraries: Library[];
}

export default ({columns, libraries}: TableProps) => (
    <>
        {/*@ts-ignore*/}
        <MaterialTable
            title="Libraries"
            columns={columns}
            data={libraries}
            // @ts-ignore
            icons={tableIcons}
            actions={[
                {
                    icon: tableIcons.Create,
                    tooltip: 'Edit User',
                    // @ts-ignore
                    onClick: (event, rowData) => onLibraryClick(rowData)
                }
            ]}
        />
    </>
)
