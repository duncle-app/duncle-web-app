import React from 'react'
import useStyles from "../../global-styles";
import Typography from "@material-ui/core/Typography";
import Form from "../../common/Form";
import DatePicker from "../atoms/DatePicker/DatePicker";
import DefaultButton from "../atoms/Button/DefaultButton";

interface Props {
    title: string
    handleSubmit(props: any): any
}

export default function ({title, handleSubmit}: Props) {
    const {paddingTop} = useStyles()

    return (
        <div className={paddingTop}>
            <Typography variant="h6" style={{color: 'black'}}>
                {title}
            </Typography>
            <Form onSubmit={handleSubmit}>
                <DatePicker/>
                <DefaultButton type="submit">
                    Schedule
                </DefaultButton>
            </Form>
        </div>
    )
}
