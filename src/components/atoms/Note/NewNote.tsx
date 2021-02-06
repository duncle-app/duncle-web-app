import React from 'react'
import Form from "../../../common/Form";
import {Paper} from "@material-ui/core";
import TextArea from "../TextArea/TextArea";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from "@material-ui/core/Button";
import DefaultButton from "../Button/DefaultButton";
import useStyles from "../../../global-styles";
import {PhoneDisabled} from "@material-ui/icons";

interface props {
    // @ts-ignore
    formSubmit(props): any
}

export default function ({formSubmit}: props) {
    const {paddingTwo, longWidth} = useStyles()

    const onNoAnswer = () => formSubmit({newNote: 'Called, but no answer.'});

    return <Form onSubmit={formSubmit}>
        <Paper className={paddingTwo}>
            <div>
                <TextArea
                    className={longWidth}
                    name="New Note"
                    placeholderText="Enter a new note here"
                />
                <div>
                    <Button variant='outlined' type="submit">
                        Save Note <AddBoxIcon style={{color: "green", paddingLeft: '.1em'}}/>
                    </Button>
                </div>
                <div className={paddingTwo}>
                    <Button variant='outlined' onClick={onNoAnswer}>
                        No Answer <PhoneDisabled style={{color: "red", paddingLeft: '.1em'}}/>
                    </Button>
                </div>
            </div>
        </Paper>
    </Form>
}
