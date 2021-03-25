import Library from "../model/library";
import { BehaviorSubject, Observable } from "rxjs";
import { newLibrary } from "../components/storybook-mocks/constants";

export class AppState {
  private isInitialized = false;
  private librariesSubject: BehaviorSubject<Library[]> = new BehaviorSubject<
    Library[]
  >([]);
  private selectedLibrary: Library = newLibrary;

  public setLibraries(libraries: Library[]) {
    this.isInitialized = true;
    return this.librariesSubject.next(libraries);
  }

  public getLibraries(): Observable<Library[]> {
    return this.librariesSubject.asObservable();
  }

  public initialized(): boolean {
    return this.isInitialized;
  }

  public getSelectedLibrary(): Library {
    return this.selectedLibrary;
  }

  public setSelectedLibrary(value: Library) {
    this.selectedLibrary = value;
  }
}
