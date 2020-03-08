import * as data from './TestLibraryGet.json'
import {Library} from "../model/library";
import {of, Observable} from 'rxjs';
import {ILibraryService} from "./interfaces/i-library-service";


export class DummyLibraryService implements ILibraryService {

    public getLibraries(): Observable<Library[]> {
        return of(data.libraries);
    }
}

