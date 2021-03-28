import React, { Component, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "../../../common/GlobalContext";
import useAuth from "../../../common/hooks/Auth/useAuth";

// @ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated());

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
