import React from "react";
import Success from "./Success";
import {select, withKnobs} from '@storybook/addon-knobs';

export default {
    title: "Atoms/Snackbar",
    decorators: [withKnobs],
};

const label = 'Styles';
const options: string[] = ['error', 'warning', 'info', 'success'];
const defaultValue = 'success'

export const withProps = () =>
    // @ts-ignore
    <Success severity={select(label, options, defaultValue)}/>
