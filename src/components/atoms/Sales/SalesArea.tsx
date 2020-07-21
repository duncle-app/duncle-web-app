import React from 'react'
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CustomTextField from "../TextField/CustomTextField";
import Form from "../../../common/Form";

interface props {
    totalSales: number,
    lastSale: number,
}

export default ({totalSales, lastSale}: props) => {
    const addSale = () => alert("Added sale")

    return <>
        <Paper>
            <Typography variant="h5" component="h2">
                Total Sales: ${totalSales} Last Sale: ${lastSale}
            </Typography>
            <Form onSubmit={addSale}>
                <CustomTextField name="New Sale"/>
            </Form>
        </Paper>
    </>
}
