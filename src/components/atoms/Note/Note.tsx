import React, {useState} from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Edit from '@material-ui/icons/Edit';
import TextArea from "../TextArea/TextArea";
import {Form} from "react-final-form";

export type NoteProps = {
    message: string;
    dateCreated: string;
    author: string;
}

export default function ({message, author, dateCreated}: NoteProps) {
    const [isEditing, setisEditing] = useState(false)

    const classes = {
        root: "",
        title: "",
        pos: ""
    }

    let content =
        isEditing
            ?
            // todo - make this prettier
            <CardContent>
                <Form
                    onSubmit={() => alert("Saving Message")}
                    initialValues={message}
                    render={({form, handleSubmit}) => (
                        <>
                            <TextArea name="note" placeholderText="A note is required" message={message}/>
                            <Button type="submit" onClick={handleSubmit}>Submit</Button>
                        </>
                    )}
                />
            </CardContent>
            :
            <>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Created by {author}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {message}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {dateCreated}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => setisEditing(true)}><Edit/> Edit</Button>
                </CardActions>
            </>

    return (
        <Card className={classes.root}>
            {content}
        </Card>
    )
}
