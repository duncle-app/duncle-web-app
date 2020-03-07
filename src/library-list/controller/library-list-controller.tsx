import {LibraryListService} from "./library-list-service";
import {Library} from "../../model/library";
import { Observable } from 'rxjs'
import {AppState} from "../../control/app-state";
import { Route } from 'react-router';


export class LibraryListController {
    private libraryListService: LibraryListService;
    private appState: AppState;

    constructor(libraryListService: LibraryListService, appState: AppState) {
        this.libraryListService = libraryListService;
        this.appState = appState;
    }

    public getListOfLibraries(): Observable<Library[]> {
        return this.libraryListService.getLibraries();
    }

    public routeToLibraryDetail(library: Library, stuff: any) {
        this.appState.setSelectedLibrary(library);
        // navigate
        //
        stuff();
    }
}
