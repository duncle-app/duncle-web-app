import React from 'react'
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

interface props {
    totalSales: number,
    lastSale: number,
}

export default ({totalSales, lastSale}: props) =>
    <>
        <Paper>
            <Typography variant="h5" component="h2">
                Total Sales: ${totalSales} Last Sale: ${lastSale}
            </Typography>
        </Paper>
    </>
