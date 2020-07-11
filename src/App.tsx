import React from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import {DummyLibraryService} from "./common/dummy-library-service";
import {LibraryDetailController} from "./components/library-detail/control/library-detail-controller";
import {AppState} from "./common/app-state";
import {LibraryManager} from "./common/library-manager";
import LibraryEditController from "./components/library-edit/control/library-edit-controller";
import Login from "./components/pages/LogIn/Login";
import {GlobalProvider} from "./common/GlobalContext";
import SignUp from "./components/pages/SignUp/SignUp";
import Navbar from "./components/molecules/Navbar/Navbar";
import PrivateRoute from "./components/atoms/Route/PrivateRoute";
import AllLibraries from "./components/pages/LibraryList/AllLibraries";

const appState: AppState = new AppState();
const libraryService: DummyLibraryService = new DummyLibraryService();
const libraryManager: LibraryManager = new LibraryManager(
    libraryService,
    appState
);

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
                    <button><Link to="/protected">Protected Page</Link></button>
                    <Switch>
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
                            // component={MrSir}
                            component={AllLibraries}
                        />
                        // todo - add private route, remove the need to pass in libraryManager?
                        {/*<PrivateRoute*/}
                        {/*    exact*/}
                        {/*    path="/library"*/}
                        {/*    // component={MrSir}*/}
                        {/*    component={LibraryListController}*/}
                        {/*/>*/}
                        {/*<Route*/}
                        {/*    exact*/}
                        {/*    path="/library/create"*/}
                        {/*    children={<LibraryCreate libraryManager={libraryManager}/>}*/}
                        {/*/>*/}
                        <Route
                            exact
                            path="/library/:libraryId"
                            children={
                                <LibraryDetailController libraryManager={libraryManager}/>
                            }
                        />
                        <Route
                            exact
                            path="/library/:libraryId/edit"
                            children={<LibraryEditController libraryManager={libraryManager}/>}
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
