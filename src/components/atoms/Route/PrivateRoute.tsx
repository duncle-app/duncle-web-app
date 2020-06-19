import React, {Component, useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {GlobalContext} from "../../../common/GlobalContext";

// @ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => {
    const {isAuthenticated} = useContext(GlobalContext)
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
