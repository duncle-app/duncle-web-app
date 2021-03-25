import React from "react";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Form from "../../../common/Form";
import NumberTextField from "../TextField/NumberTextField";
import useStyles from "../../../global-styles";

export interface addSaleInputProps {
  newSale: number;
}

interface props {
  totalSales: number;
  lastSale: number;
  addSale(arg: addSaleInputProps): void;
}

export default ({ totalSales, lastSale, addSale }: props) => {
  const { paddingTwo, smallerHeight } = useStyles();

  return (
    <Form onSubmit={addSale}>
      <Paper className={paddingTwo}>
        <Typography variant="h5" component="h2">
          Total Sales: ${totalSales} Last Sale: ${lastSale}
        </Typography>
        <div className={smallerHeight}>
          <Form onSubmit={addSale}>
            <NumberTextField name="New Sale" />
          </Form>
        </div>
      </Paper>
    </Form>
  );
};
