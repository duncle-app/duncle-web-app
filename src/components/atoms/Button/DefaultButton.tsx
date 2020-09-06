import React from 'react'
import Button from "@material-ui/core/Button";

interface Props {
    children?: React.ReactNode
    onClick?(): any
    type?: "button" | "submit" | "reset" | undefined
}

export default ({children, onClick, type = undefined}: Props) =>
    <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        type={type}
    >
        {children}
    </Button>