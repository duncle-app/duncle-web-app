import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LibraryListContainer from "./library-list/library-list-container";
import {LibraryListController} from "./library-list/controller/library-list-controller";
import {LibraryListService} from "./library-list/controller/library-list-service";
import {LibraryDetail} from "./library-detail/library-detail";
import {LibraryDetailController} from "./library-detail/control/LibraryDetailController";
import {AppState} from "./control/app-state";
import Navbar from './control/menu-bar'


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
                <Navbar/>
                <Switch>
                    <Route exact path="/" children={<LibraryListContainer controller={controller} appState={appState}/>}/>
                    <Route exact path="/:libraryId" children={<LibraryDetail controller={libraryDetailController}/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;
