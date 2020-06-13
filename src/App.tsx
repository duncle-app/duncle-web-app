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
import LibraryAppbar from "./components/library-appbar/LibraryAppbar";
import LibraryCreate from "./components/library-create/LibraryCreate";
import {PouchReturnProps, useLibraryPouch} from "./common/hooks/UsePouch";
import {GlobalContext, initialValues} from "./common/GlobalContext";

const appState: AppState = new AppState();
const libraryService: DummyLibraryService = new DummyLibraryService();
const libraryManager: LibraryManager = new LibraryManager(
    libraryService,
    appState
);

function App() {
    const pouch: PouchReturnProps = useLibraryPouch()
    console.log('pouch:', pouch)
    const mrSir = pouch.get('0380009f-0b66-4ac3-b363-d648e24208a2');
    console.log("Testing POUCH GET from local", mrSir)

    return (
        <div className="App">
            <GlobalContext.Provider value={initialValues}>
                <BrowserRouter>
                    <LibraryAppbar/>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            // @ts-ignore
                            children={<Login/>}
                        />
                        <Route
                            exact
                            path="/library"
                            children={<LibraryListController libraryManager={libraryManager}/>}
                        />
                        <Route
                            exact
                            path="/library/create"
                            children={<LibraryCreate libraryManager={libraryManager}/>}
                        />
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
