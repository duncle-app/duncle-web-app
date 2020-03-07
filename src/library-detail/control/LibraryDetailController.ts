import {Library} from "../../model/library";
import { Observable, of } from 'rxjs';
import {AppState} from "../../control/app-state";

export class LibraryDetailController {

    private appState: AppState;
    constructor(appState: AppState) {
        this.appState = appState;
    }

    public getSelectedLibrary(): Observable<Library> {
        return of(this.appState.getSelectedLibrary())
    }
}
