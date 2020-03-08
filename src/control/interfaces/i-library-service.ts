import {Library} from "../../model/library";
import { Observable } from 'rxjs';

export interface ILibraryService {
    getLibraries(): Observable<Library[]>;
}
