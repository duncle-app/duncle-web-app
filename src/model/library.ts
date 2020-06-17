import Contact from "./contact";
import Sale from "./sale";
import User from "./user";

export default class Library {
    public address: string;
    public id: string;
    public libraryName: string;
    public notes: string;
    public level: string;
    public city: string;
    public zip: string;
    public state: string;
    public county: string;
    public contact: Contact;
    public salesRep: User;
    public sales: Sale[];

    public static None: Library = new Library(
        "None",
        "None",
        "None",
        "None",
        "None",
        "None",
        "None",
        Contact.None,
        User.None
    );

    constructor(
        libraryName: string,
        level: string,
        city: string,
        state: string,
        county: string,
        zip: string,
        address: string,
        contact: Contact = Contact.None,
        salesRep: User = User.None
    ) {
        this.libraryName = libraryName;
        this.level = level;
        this.city = city;
        this.state = state;
        this.county = county;
        this.zip = zip;
        this.address = address;
        this.id = "";
        this.notes = "";
        this.contact = contact;
        this.salesRep = salesRep;
        this.sales = [];
    }

}
