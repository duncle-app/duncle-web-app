import React, {useContext} from 'react'
import {MockContext} from "../../storybook-mocks/MockProviders";

export default function () {
    const {isAuthenticated} = useContext(MockContext)

    return (
        <>
            hi
            {isAuthenticated ? <p>yes</p> : <p>no</p>}
        </>
    )
}
