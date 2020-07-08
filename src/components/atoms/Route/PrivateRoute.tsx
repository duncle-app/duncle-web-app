import React, {Component, useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {GlobalContext} from "../../../common/GlobalContext";

// figure out how to pass the component ??
// maybe need a redesign of the components, becauase most y components will have params passed in?
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
