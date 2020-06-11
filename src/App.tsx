import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LibraryListController from "./library-list/control/library-list-controller";
import {DummyLibraryService} from "./control/dummy-library-service";
import {LibraryDetailController} from "./library-detail/control/library-detail-controller";
import {AppState} from "./control/app-state";
import {LibraryManager} from "./control/library-manager";
import LibraryEditController from "./library-edit/control/library-edit-controller";
import Login from "./pages/LogIn/Login";
import LibraryAppbar from "./library-appbar/LibraryAppbar";
import LibraryCreate from "./library-create/LibraryCreate";
import {PouchReturnProps, useLibraryPouch} from "./control/hooks/UsePouch";
import {GlobalContext, initialValues} from "./control/GlobalContext";

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
