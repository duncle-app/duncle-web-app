import {LibraryListService} from "./library-list-service";
import {Library} from "../../model/library";
import { Observable } from 'rxjs'

export class LibraryListController {
    private libraryListService: LibraryListService;

    constructor(libraryListService: LibraryListService) {
        this.libraryListService = libraryListService
    }

    public getListOfLibraries(): Observable<Library[]> {
        return this.libraryListService.getLibraries();
    }
}