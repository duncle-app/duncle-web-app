import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./components/pages/LogIn/Login";
import GlobalProvider from "./common/providers/GlobalProvider";
import SignUp from "./components/pages/SignUp/SignUp";
import Navbar from "./components/elements/Navbar/Navbar";
import PrivateRoute from "./components/atoms/Route/PrivateRoute";
import AllLibraries from "./components/pages/Dashboard/AllLibraries";
import AddLibrary from "./components/pages/AddLibrary/AddLibrary";
import ViewLibrary from "./components/pages/ViewLibrary/ViewLibrary";
import EditLibraryController from "./components/pages/EditLibrary/EditLibraryController";
import DefaultButton from "./components/atoms/Button/DefaultButton";
import CalendarController from "./components/atoms/Calendar/CalendarController";
import Snackbar from "./components/atoms/Snackbar/Snackbar";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useStyles from "./global-styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const Unauthorized = () => {
  const { paddingOneChildren } = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={paddingOneChildren}>
      <Typography variant="h4">You are not authorized</Typography>
      <Link to="/login">
        <DefaultButton>Sign in</DefaultButton>
      </Link>
    </Container>
  );
};

export default () => {
  return (
    <div className="App">
      <CssBaseline />
      <GlobalProvider>
        <Router>
          <Navbar />
          <Snackbar />
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
            <PrivateRoute
              exact
              path="/calendar"
              component={CalendarController}
            />
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
          <ReactQueryDevtools />
        </Router>
      </GlobalProvider>
    </div>
  );
};
