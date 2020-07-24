import Library from "../model/library";
import {of, Observable} from 'rxjs';
import {newLibrary, newLibrary2} from "../components/storybook-mocks/constants";

export class DummyLibraryService {
    libraries = [newLibrary, newLibrary2]

    public getLibraries(): Observable<Library[]> {
        return of(this.libraries);
    }
}

