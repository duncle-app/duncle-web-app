import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../common/hooks/Auth/useAuth";

// @ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/unauthorized" />
        )
      }
    />
  );
};
export default PrivateRoute;
