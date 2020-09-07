import React from "react";
import SalesArea from "./SalesArea"
import {action} from "@storybook/addon-actions";

export default {
    title: "Atoms/SalesArea",
};

const addSale = () => action("Added sale")
const noSale = () => action("No sale")

export const withProps = () =>
    <SalesArea totalSales={50250} lastSale={2500} addSale={addSale} handleNoSale={noSale}/>