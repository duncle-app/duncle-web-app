import {Library} from "../model/library";

export class AppState {
    constructor() {
        this.selectedLibrary = new Library('default');
    }
    private selectedLibrary: Library;


    public setSelectedLibrary(library: Library) {
        this.selectedLibrary = library;
    }

    public getSelectedLibrary() {
        return this.selectedLibrary;
    }

}
