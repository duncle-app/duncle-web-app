import React from 'react'
import {Form as FinalForm} from "react-final-form";

// @ts-ignore
export default props =>
    <FinalForm
        onSubmit={props.onSubmit}
        // @ts-ignore
        render={({handleSubmit}) => (
            <>
                <form onSubmit={handleSubmit}>{props.children}</form>
            </>
        )}
    />
