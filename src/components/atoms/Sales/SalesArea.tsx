import React from 'react'
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Form from "../../../common/Form";
import NumberTextField from "../TextField/NumberTextField";
import useStyles from "../../../global-styles";
import {Close} from "@material-ui/icons";
import Button from "@material-ui/core/Button";

export interface addSaleInputProps {
    newSale: number
}

interface props {
    totalSales: number,
    lastSale: number,
    addSale(arg: addSaleInputProps): void
}

export default ({totalSales, lastSale, addSale}: props) => {
    const {paddingTwo, smallerHeight, nextToTextField} = useStyles()

    return <Form onSubmit={addSale}>
        <Paper className={paddingTwo}>
            <Typography variant="h5" component="h2">
                Total Sales: ${totalSales} Last Sale: ${lastSale}
            </Typography>
            <div className={smallerHeight}>
                <Form onSubmit={addSale}>
                    <NumberTextField name="New Sale"/>
                    <div>
                        <Button variant='outlined' className={nextToTextField}>
                            <Typography variant="subtitle2" component="h2">
                                No Sale
                            </Typography>
                            <Close/>
                        </Button>
                    </div>
                </Form>
            </div>
        </Paper>
    </Form>
}
