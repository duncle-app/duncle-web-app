import {Contact} from "./contact";
import {Sale} from "./sale";

export class Library {

    public static None: Library =
        new Library( 'None', 'None', 'None', 'None', 'None', 'None', 'None','None',);

    constructor(libraryName: string, level: string, size: string, city: string, state: string, county: string, zip: string, address: string) {
        this.libraryName = libraryName;
        this.contact = Contact.None;
        this.level = level;
        this.size = size;
        this.city = city;
        this.state = state;
        this.county = county;
        this.zip = zip;
        this.address = address;
        this.id = '';
        this.notes = '';
        this.sales = [];
    }

    public address: string;
    public id: string;
    public libraryName: string;
    public contact: Contact;
    public notes: string;
    public level: string;
    public size: string;
    public city: string;
    public zip: string;
    public state: string;
    public county: string;
    public sales: Sale[];
}
