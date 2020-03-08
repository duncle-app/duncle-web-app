import {Library} from "../model/library";
import {BehaviorSubject, Observable} from 'rxjs';

export class AppState {
    constructor() {

    }
    private selectedLibrarySubject: BehaviorSubject<Library> = new BehaviorSubject<Library>(Library.None);
    private librariesSubject: BehaviorSubject<Library[]> = new BehaviorSubject<Library[]>([]);


    public setSelectedLibrary(library: Library) {
        this.selectedLibrarySubject.next(library);
    }

    public getSelectedLibrary(): Observable<Library> {
        return this.selectedLibrarySubject.asObservable();
    }

    public setLibraries(libraries: Library[]) {
        return this.librariesSubject.next(libraries);
    }
    public getLibraries(): Observable<Library[]> {
        return this.librariesSubject.asObservable();
    }
}
