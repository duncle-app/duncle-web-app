import React from 'react'
import MaterialTable from "material-table";
import {Library} from "../../../model";
import {tableIcons} from "../../../common/tableIcons";
import {CardHeader} from "@material-ui/core";
import useStyles from "../../../global-styles";
import moment from "moment";

type TableProps = {
    libraries: Library[];
    onEdit?(library: Library): void;
}
export default ({libraries, onEdit}: TableProps) => {
    const {cardHeader} = useStyles();

    const tableColumns = [
        {title: "Library", field: "libraryName"},
        {
            title: "Contact",
            field: "contactName",
            render: (rowData: Library) => `${rowData.librarian}`
        },
        {title: "Phone / Email", field: "phoneNumber"},
        {title: "Last Contacted", field: "dateLastContact"},
        {title: "Next Contact", field: "dateNextContact"},
    ];

    function getColor(meetingTime: Date): string {
        const currentDate: Date = moment().toDate()
        const nextMonth = moment(currentDate).add(1, "month");

        // Need this to perform comparisons
        const momentDate = moment(meetingTime)
        const green = "#4caf50";

        if (momentDate.isBefore(currentDate, 'month')) {
            return "red"
        } else if (momentDate.isSame(currentDate, 'month')) {
            return green
        } else if (momentDate.isSame(nextMonth, 'month')) {
            return "yellow";
        } else {
            return "white"
        }
    }

    return (
        <>
            <CardHeader title="Libraries" className={cardHeader}/>
            <MaterialTable
                title=" "
                columns={tableColumns}
                data={libraries}
                // @ts-ignore
                icons={tableIcons}
                options={{
                    // todo - might have to revisit this.. probably better to do 100 page size, with pagination options
                    //  see docs - https://material-table.com/#/docs/all-props
                    paging: false,
                    rowStyle: ({librarian, dateNextContact}: Library) => {
                        const nextDate = moment(dateNextContact).toDate()
                        console.log({nextDate}, {librarian})
                        const backgroundColor: string = getColor(nextDate)
                        console.log({backgroundColor})
                        return {backgroundColor}
                    }
                }}
                actions={[
                    {
                        // @ts-ignore
                        icon: tableIcons.Create,
                        tooltip: 'Edit UserDAO',
                        // @ts-ignore
                        onClick: (event, rowData) => onEdit(rowData)
                    }
                ]}
            />
        </>
    )
}
