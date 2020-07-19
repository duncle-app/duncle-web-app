import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Edit from '@material-ui/icons/Edit';

export type NoteProps = {
    message: string;
    dateCreated: string;
    author: string;
}

export default function({message, author, dateCreated}: NoteProps) {
    const classes = {
        root:"",
        title:"",
        pos:""
    }
    return (
        <Card className={classes.root}>
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
                <Button size="small"><Edit/> Edit</Button>
            </CardActions>
        </Card>
    )
}
