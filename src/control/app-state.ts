import {Library} from "../model/library";

export class AppState {
    constructor() {
        this.selectedLibrary = new Library('default', '69');
    }
    private selectedLibrary: Library;


    public setSelectedLibrary(library: Library) {
        this.selectedLibrary = library;
    }

    public getSelectedLibrary() {
        return this.selectedLibrary;
    }

}
