import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LibraryList from "./library-list/library-list";
import {LibraryListController} from "./library-list/controller/library-list-controller";
import {LibraryListService} from "./library-list/controller/library-list-service";

function Dummy() {
    return (<h1>Hello</h1>)
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" children={<LibraryList controller={new LibraryListController(new LibraryListService())}/>}/>
                    <Route exact path="/mrsir" children={<Dummy/>}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
