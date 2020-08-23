import React from 'react'
import DialogueWrapper, {DialogProps} from "./DialogueWrapper";
import CustomTextField from "../TextField/CustomTextField";

export interface DateDialogReturn {
    appointmentTitle: string
}

export default (props: DialogProps) => {
    const librarian: string = "Nancy Torvald"

    return <DialogueWrapper {...props}>
        <CustomTextField name="Appointment Title" defaultValue={librarian} isRequired alsoInitialValue autoFocus/>
    </DialogueWrapper>
}
