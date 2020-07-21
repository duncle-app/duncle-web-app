import React from "react";
import SalesArea from "./SalesArea"

export default {
    title: "Atoms/SalesArea",
    component: SalesArea,
};

export const withProps = () =>
    <SalesArea totalSales={50250} lastSale={2500}/>