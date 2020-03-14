import * as data from './TestLibraryGet.json'
import {Library} from "../model/library";
import {of, Observable} from 'rxjs';

export class DummyLibraryService {

    public getLibraries(): Observable<Library[]> {
        return of(data.libraries);
    }
}

