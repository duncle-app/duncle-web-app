import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from "../../../common/hooks/useAuth";

// @ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => {
    const {isAuthenticated} = useAuth()
    console.log("isAuthenticated",isAuthenticated)

    return (
        <Route {...rest} render={(props) => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to="/unauthorized"/>
        )}/>
    )
}
export default PrivateRoute