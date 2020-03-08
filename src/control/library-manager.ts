import {LibraryService} from "./library-service";
import {AppState} from "./app-state";
import {Library} from "../model/library";
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class LibraryManager {

    private libraryListService: LibraryService;
    private appState: AppState;
    constructor(libraryListService: LibraryService, appState: AppState) {
        this.libraryListService = libraryListService;
        this.appState = appState;
    }

    public getLibraries(): Observable<Library[]> {
        if (this.appState.initialized()) {
            return this.appState.getLibraries();
        }
        return this.libraryListService.getLibraries().pipe(
            tap( x => this.appState.setLibraries(x))
        )
    }
}
