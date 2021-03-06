import Button from '@material-ui/core/Button';
import React from 'react'

interface Props {
    isAuthenticated: boolean
    signOutHandler: Function
}

export default function ({isAuthenticated, signOutHandler}: Props) {

    return (
        <>
            {isAuthenticated ? <Button onClick={signOutHandler}>Sign Out</Button> : <p>Not signed in</p>}
        </>
    )
}
