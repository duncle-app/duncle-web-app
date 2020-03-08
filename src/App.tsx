import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LibraryListController from "./library-list/control/library-list-controller";
import {LibraryListService} from "./library-list/control/library-list-service";
import {LibraryDetailController} from "./library-detail/control/library-detail-controller";
import {AppState} from "./control/app-state";
import {Observable} from 'rxjs';



function Dummy() {
    return (<h1>Hello</h1>)
}

const appState: AppState = new AppState();
const libraryListService: LibraryListService = new LibraryListService();


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" children={<LibraryListController appState={appState}
                                                                           libraryListService={libraryListService}/>}
                    />
                    <Route exact path="/library/:libraryId" children={<LibraryDetailController appState={appState}/>}
                    />
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
