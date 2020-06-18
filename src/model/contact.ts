export default class Contact {
    public static None: Contact = new Contact('None', 'None', 'None');

    public librarian: string;
    public phoneNumber: string;
    public emailAddress: string;

    constructor(librarian: string, phoneNumber: string, emailAddress: string) {
        this.librarian = librarian;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }
}
