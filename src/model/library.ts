export class Library {

    public static None: Library = new Library('None', 'None');

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    }
    public name: string;
    public id: string;
}
