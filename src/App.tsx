import React from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/pages/LogIn/Login";
import {GlobalProvider} from "./common/GlobalContext";
import SignUp from "./components/pages/SignUp/SignUp";
import Navbar from "./components/molecules/Navbar/Navbar";
import PrivateRoute from "./components/atoms/Route/PrivateRoute";
import AllLibraries from "./components/pages/LibraryList/AllLibraries";
import AddLibrary from "./components/pages/AddLibrary/AddLibrary";
import ViewLibrary from "./components/pages/ViewLibrary/ViewLibrary";
import EditLibraryController from "./components/pages/EditLibrary/EditLibraryController";
import DefaultButton from "./components/atoms/Button/DefaultButton";
import CalendarController from "./components/atoms/Calendar/CalendarController";
import useSuccessSnackbar from "./components/atoms/Snackbar/Snackbar";

const Protected = () => <h3>Protected</h3>

const Unauthorized = () => {
    const {setSnackbarMessage} = useSuccessSnackbar()

    const handle = () => {
        setSnackbarMessage("Mr sir")
    }
    return <>
        <h1>You are not authorized. </h1>
        <DefaultButton onClick={handle}>
            Mr Sir
        </DefaultButton>
        <Link to="/login">
            <DefaultButton>Sign in</DefaultButton>
        </Link>
    </>
}
function App() {

    return (
        <div className="App">
            <GlobalProvider>
                <Router>
                    <Navbar/>
                    <Switch>
                        {/* todo - auto route to login page if we're not logged in */}
                        <Redirect exact from="/" to="login"/>
                        <Route
                            exact
                            path="/signup"
                        >
                            <SignUp/>
                        </Route>
                        <Route
                            exact
                            path="/login">
                            {/* TODO - REDIRECT */}
                            <Login/>
                        </Route>
                        <PrivateRoute
                            exact
                            path="/protected"
                            component={Protected}
                        />
                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={AllLibraries}
                        />
                        <PrivateRoute
                            exact
                            path="/calendar"
                            component={CalendarController}
                        />
                        <PrivateRoute
                            exact
                            path="/library/new"
                            component={AddLibrary}
                        />
                        <PrivateRoute
                            exact
                            path="/library/:libraryId"
                            component={ViewLibrary}
                        />
                        <PrivateRoute
                            exact
                            path="/library/:libraryId/edit"
                            component={EditLibraryController}
                        />
                        <Route
                            path="/unauthorized"
                            children={<Unauthorized/>}
                        />
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    );
}

export default App;
