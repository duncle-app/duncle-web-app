import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LibraryListController from "./library-list/control/library-list-controller";
import {DummyLibraryService} from "./control/dummy-library-service";
import {LibraryDetailController} from "./library-detail/control/library-detail-controller";
import {AppState} from "./control/app-state";
import {LibraryManager} from "./control/library-manager";
import LibraryEditController from "./library-edit/control/library-edit-controller";
import Login from "./login/controller/login-controller";

const appState: AppState = new AppState();
const libraryService: DummyLibraryService = new DummyLibraryService();
const libraryManager: LibraryManager = new LibraryManager(libraryService, appState);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"
                       children={<Login/>}/>
                    <Route exact path="/library"
                       children={<LibraryListController
                       libraryManager={libraryManager}/>}/>
                    <Route exact path="/library/:libraryId"
                        children={<LibraryDetailController
                        libraryManager={libraryManager}/>}/>
                    <Route exact path="/library/:libraryId/edit"
                        children={<LibraryEditController
                        libraryManager={libraryManager}/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
