import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar/Navbar";
import Snackbar from "../atoms/Snackbar/Snackbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/LogIn/Login";
import PrivateRoute from "../atoms/Route/PrivateRoute";
import AllLibraries from "../pages/Dashboard/AllLibraries";
import CalendarController from "../atoms/Calendar/CalendarController";
import AddLibrary from "../pages/AddLibrary/AddLibrary";
import ViewLibrary from "../pages/ViewLibrary/ViewLibrary";
import EditLibraryController from "../pages/EditLibrary/EditLibraryController";
import { ReactQueryDevtools } from "react-query/devtools";
import Unauthorized from "./Unauthorized/Unauthorized";

export default ({ children }: PropsWithChildren<any>) => {
  return (
    <Router>
      {children}
      <Switch>
        {/* todo - auto route to login page if we're not logged in */}
        <Redirect exact from="/" to="login" />
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          {/* TODO - REDIRECT */}
          <Login />
        </Route>
        <PrivateRoute exact path="/dashboard" component={AllLibraries} />
        <PrivateRoute exact path="/calendar" component={CalendarController} />
        <PrivateRoute exact path="/library/new" component={AddLibrary} />
        <PrivateRoute
          exact
          path="/library/:libraryId"
          component={ViewLibrary}
        />
        <Route
          exact
          path="/library/:libraryId/edit"
          component={EditLibraryController}
        />
        <Route path="/unauthorized" children={<Unauthorized />} />
      </Switch>
    </Router>
  );
};
