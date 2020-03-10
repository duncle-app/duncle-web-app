import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LibraryListController from "./library-list/control/library-list-controller";
import {DummyLibraryService} from "./control/dummy-library-service";
import {LibraryDetailController} from "./library-detail/control/library-detail-controller";
import {AppState} from "./control/app-state";
import {LibraryManager} from "./control/library-manager";
import {ILibraryService} from "./control/interfaces/i-library-service";

const appState: AppState = new AppState();
const libraryService: ILibraryService = new DummyLibraryService();
const libraryManager: LibraryManager = new LibraryManager( libraryService, appState);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" children={<LibraryListController libraryManager={libraryManager}/>}
                    />
                    <Route exact path="/library/:libraryId" children={<LibraryDetailController
                        libraryManager={libraryManager}/>}
                    />
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
