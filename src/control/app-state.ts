import {Library} from "../model/library";
import {BehaviorSubject, Observable} from 'rxjs';

export class AppState {
    constructor() {

    }
    private isInitialized = false;
    private librariesSubject: BehaviorSubject<Library[]> = new BehaviorSubject<Library[]>([]);


    public setLibraries(libraries: Library[]) {
        this.isInitialized = true;
        return this.librariesSubject.next(libraries);
    }
    public getLibraries(): Observable<Library[]> {
        return this.librariesSubject.asObservable();
    }

    public initialized(): boolean {
        return this.isInitialized
    }
}
