import React from 'react'
import DialogueWrapper, {DialogProps} from "./DialogueWrapper";
import {DialogContentText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import Form from "../../../common/Form";
import DatePicker from "../DatePicker/DatePicker";
import CustomTextField from "../TextField/CustomTextField";
import MockForm from "../../storybook-mocks/mockForm";
import EmailTextField from "../TextField/EmailTextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

export default (props: DialogProps) =>
    <DialogueWrapper {...props}>
            <DialogContentText>
                Librarian: Nancy Torvald
            </DialogContentText>
            <DatePicker/>
            <Button type="submit" color="primary">
                <strong>Sting</strong>
            </Button>
    </DialogueWrapper>
