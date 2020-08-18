import React from 'react'
import Button from "@material-ui/core/Button";

interface Props {
    children?: React.ReactNode
    onClick?(): any
}

export default ({children, onClick}: Props) =>
    <Button
        variant="contained"
        color="primary"
        onClick={onClick}
    >
        {children}
    </Button>