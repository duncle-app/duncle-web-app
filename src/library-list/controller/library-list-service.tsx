import * as data from './TestLibraryGet.json'
import {Library} from "../../model/library";
import { of, Observable } from 'rxjs'

export class LibraryListService {

    constructor() {

    }

    getLibraries(): Observable<Library[]> {
        return of(data.libraries);
    }
}