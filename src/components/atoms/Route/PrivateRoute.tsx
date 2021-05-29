import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../common/hooks/Auth/useAuth";

const DEFAULT_INPUT = "";

export default ({
  // @ts-ignore
  component: Component,
  requiredRole = DEFAULT_INPUT,
  ...rest
}) => {
  const { isAuthenticated, getAuthenticatedUser } = useAuth();

  let canAccess: boolean;
  if (requiredRole !== DEFAULT_INPUT) {
    canAccess =
      isAuthenticated() && getAuthenticatedUser()?.role === requiredRole;
  } else {
    canAccess = isAuthenticated();
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        canAccess ? (
          // @ts-ignore
          <Component {...props} />
        ) : (
          <Redirect to="/unauthorized" />
        )
      }
    />
  );
};
