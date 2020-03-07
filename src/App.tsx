import React from 'react';
import './App.css';
import LibraryList from "./library-list/library-list";
import {LibraryListController} from "./library-list/controller/library-list-controller";
import {LibraryListService} from "./library-list/controller/library-list-service";

function App() {
  return (
    <div className="App">
      <LibraryList controller={new LibraryListController(new LibraryListService())}/>
    </div>
  );
}

export default App;
