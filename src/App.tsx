import React from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import {DummyLibraryService} from "./common/dummy-library-service";
import {AppState} from "./common/app-state";
import Login from "./components/pages/LogIn/Login";
import {GlobalProvider} from "./common/GlobalContext";
import SignUp from "./components/pages/SignUp/SignUp";
import Navbar from "./components/molecules/Navbar/Navbar";
import PrivateRoute from "./components/atoms/Route/PrivateRoute";
import AllLibraries from "./components/pages/LibraryList/AllLibraries";
import AddLibrary from "./components/pages/AddLibrary/AddLibrary";
import ViewLibrary from "./components/pages/ViewLibrary/ViewLibrary";

const appState: AppState = new AppState();
const libraryService: DummyLibraryService = new DummyLibraryService();

const MrSir = () => <h3>Mr Sir</h3>
const Protected = () => <h3>Protected</h3>
const Unauthorized = () => (
    <>
        <h1>You are not authorized. </h1>
        <Link to="/login"><button>Home Page</button></Link>
    </>
)

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
