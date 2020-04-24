import {AppState} from "./app-state";
import {Library} from "../model/library";
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {DummyLibraryService} from "./dummy-library-service";
import {Sale} from "../model/sale";

export class LibraryManager {

    private libraryService: DummyLibraryService;
    private appState: AppState;
    constructor(libraryListService: DummyLibraryService, appState: AppState) {
        this.libraryService = libraryListService;
        this.appState = appState;
    }

    public getLibraries(): Observable<Library[]> {
        if (this.appState.initialized()) {
            return this.appState.getLibraries();
        }
        return this.libraryService.getLibraries().pipe(
            tap( x => this.appState.setLibraries(x))
        )
    }

    addLibrary(library: Library) {
        // TODO: Add new library
        throw new Error('Not Implemented.');
    }

    setSelectedLibrary(library: Library) {
        this.appState.setSelectedLibrary(library)
    }

    getSelectedLibrary() {
        return this.appState.getSelectedLibrary()
    }

    updateLibrary(library: Library) {
        alert("not implemented")
    }

    addSale(sale: Sale) {
        throw new Error('Not Implemented.');
    }
}
