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
import DemoApp from "./components/atoms/Calendar/FullCalendar";
import DefaultButton from "./components/atoms/Button/DefaultButton";

const Protected = () => <h3>Protected</h3>
const Unauthorized = () =>
    <>
        <h1>You are not authorized. </h1>
        <Link to="/login">
            <DefaultButton>Sign in</DefaultButton>
        </Link>
    </>

function App() {
    return (
        <div className="App">
            <GlobalProvider>
                <Router>
                    <Navbar/>
                    <Switch>
                        {/* todo - auto route to dashboard page */}
                        {/* todo - but then if we're not logged in, then route to login page */}
                        <Redirect exact from="/" to="login"/>
                        <Route
                            exact
                            path="/signup"
                        >
                            {/* TODO - PUBLIC ROUTE */}
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
                            component={DemoApp}
                        />
                        <PrivateRoute
                            exact
                            path="/library"
                            component={AllLibraries}
                        />
                        // todo - add private route, remove the need to pass in libraryManager?
                        {/*<PrivateRoute*/}
                        {/*    exact*/}
                        {/*    path="/library"*/}
                        {/*    // component={MrSir}*/}
                        {/*    component={LibraryListController}*/}
                        {/*/>*/}
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

                        {/*<Route*/}
                        {/*    exact*/}
                        {/*    path="/library/:libraryId"*/}
                        {/*    children={*/}
                        {/*        <LibraryDetailController libraryManager={libraryManager}/>*/}
                        {/*    }*/}
                        {/*/>*/}
                        {/*<Route*/}
                        {/*    exact*/}
                        {/*    path="/library/:libraryId/edit"*/}
                        {/*    children={<LibraryEditController libraryManager={libraryManager}/>}*/}
                        {/*/>*/}
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
