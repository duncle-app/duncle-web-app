import React, {useState} from "react";
import {select, text, withKnobs} from '@storybook/addon-knobs';
import {capitalize} from 'lodash'
import useSuccessSnackbar, {Snackbar} from "./Snackbar";
import {GlobalContext, GlobalProvider} from "../../../common/GlobalContext";

export default {
    title: "Atoms/Snackbar",
    decorators: [withKnobs],
};

// @ts-ignore
function Doggie({severity}) {
    const {setSnackbarMessage} = useSuccessSnackbar()
    // setSnackbarMessage(text('Snackbar Text', `${capitalize(severity)} message!`))
    const [message, setMessage] = useState<String>('')
    setSnackbarMessage("Please work")

    return (
        <GlobalContext.Provider value={{message, setMessage}}>
            <h1>This page is where a snackbar will appear</h1>
        </GlobalContext.Provider>
    )
}

const label = 'Styles';
const options: string[] = ['error', 'warning', 'info', 'success'];
const defaultValue = 'success'

export const withProps = () => {
    let severity = select(label, options, defaultValue);

    return (
        <Doggie severity={severity}/>
    )
}
