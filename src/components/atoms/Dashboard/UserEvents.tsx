import React from 'react'
import Table from "@material-ui/core/Table";
import {TableContainer} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

interface Props {
    events: Event[]
}

interface Event {
    name: string,
    day: string,
    time: string,
    rep: string
}

export default function UserEvents({events}: Props) {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Library Name</b></TableCell>
                        <TableCell><b>Day</b></TableCell>
                        <TableCell><b>Time</b></TableCell>
                        <TableCell><b>Rep</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell component="th" scope="row">{row.day}</TableCell>
                            <TableCell component="th" scope="row">{row.time}</TableCell>
                            <TableCell component="th" scope="row">{row.rep}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
