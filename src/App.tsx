import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LibraryListController from "./components/library-list/control/library-list-controller";
import {DummyLibraryService} from "./common/dummy-library-service";
import {LibraryDetailController} from "./components/library-detail/control/library-detail-controller";
import {AppState} from "./common/app-state";
import {LibraryManager} from "./common/library-manager";
import LibraryEditController from "./components/library-edit/control/library-edit-controller";
import Login from "./components/pages/LogIn/Login";
import {GlobalContext, initialValues} from "./common/GlobalContext";
import SignUp from "./components/pages/SignUp/SignUp";
import Navbar from "./components/molecules/Navbar/Navbar";

const appState: AppState = new AppState();
const libraryService: DummyLibraryService = new DummyLibraryService();
const libraryManager: LibraryManager = new LibraryManager(
    libraryService,
    appState
);

function App() {
    return (
        <div className="App">
            <GlobalContext.Provider value={initialValues}>
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route
                            exact
                            path="/"><Login/></Route>
                        <Route
                            exact
                            path="/signup"
                        ><SignUp/></Route>
                        <Route
                            exact
                            path="/library"
                            children={<LibraryListController libraryManager={libraryManager}/>}
                        />
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
                    </Switch>
                </BrowserRouter>
            </GlobalContext.Provider>
        </div>
    );
}

export default App;
