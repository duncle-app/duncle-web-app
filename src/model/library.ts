import {Contact} from "./contact";

export class Library {

    public static None: Library = new Library('None', 'None');
    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
        this.contact = Contact.None;
        this.notes = '';
        this.level = '';
        this.size = '';
        this.city = '';
        this.state = '';
        this.county = '';

        this.zip = '';
        this.address = '';
    }

    public address: string;
    public name: string;
    public id: string;
    public contact: Contact;
    public notes: string;
    public level: string;
    public size: string;
    public city: string;
    public zip: string;
    public state: string;
    public county: string;
}
