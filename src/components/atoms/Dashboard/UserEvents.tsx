import React from 'react'
import Table from "@material-ui/core/Table";
import {TableContainer} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import moment from "moment";

interface Props {
    events: {
        name: string,
        meetingTime: Date,
        rep: string
    }[]
}

export default function UserEvents({events}: Props) {
``    events.sort((a, b) => {
        // @ts-ignore
        return a.meetingTime - b.meetingTime
    })

    function getColor(meetingTimeMonth: number): string {
        const currentMonth: number = moment().toDate().getMonth()
        if (currentMonth > meetingTimeMonth) {
            return "red"
        } else if (currentMonth === meetingTimeMonth) {
            return "#4caf50"
        } else if (currentMonth + 1 === meetingTimeMonth) {
            return "yellow";
        } else {
            return "white"
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Library Name</b></TableCell>
                        <TableCell><b>Meeting Time</b></TableCell>
                        <TableCell><b>Rep</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.map(({name, meetingTime, rep}) => {
                        const backgroundColor: string = getColor(meetingTime.getMonth())

                        // see docs for further details - https://momentjs.com/docs/#/displaying/format/
                        const readableFormat = moment(meetingTime).format("MMMM do, H:mm")
                        return (
                            <TableRow key={name} style={{background: backgroundColor}}>
                                <TableCell component="th" scope="row">{name}</TableCell>
                                <TableCell component="th" scope="row">{readableFormat}</TableCell>
                                <TableCell component="th" scope="row">{rep}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
