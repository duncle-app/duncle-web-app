import {DummyLibraryService} from "./dummy-library-service";
import {AppState} from "./app-state";
import {Library} from "../model/library";
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ILibraryService} from "./interfaces/i-library-service";

export class LibraryManager {

    private libraryListService: ILibraryService;
    private appState: AppState;
    constructor(libraryListService: ILibraryService, appState: AppState) {
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
