import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LibraryList from "./library-list/library-list";
import {LibraryListController} from "./library-list/controller/library-list-controller";
import {LibraryListService} from "./library-list/controller/library-list-service";
import {LibraryDetail} from "./library-detail/library-detail";
import {LibraryDetailController} from "./library-detail/control/LibraryDetailController";
import {AppState} from "./control/app-state";


function Dummy() {
    return (<h1>Hello</h1>)
}


const appState: AppState = new AppState();
const controller: LibraryListController = new LibraryListController(new LibraryListService(), appState);
const libraryDetailController = new LibraryDetailController(appState);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" children={<LibraryList controller={controller} appState={appState}/>}/>
                    <Route exact path="/:libraryId" children={<LibraryDetail controller={libraryDetailController}/>}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
