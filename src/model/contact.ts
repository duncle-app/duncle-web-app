export default  class Contact {
    public static None: Contact = new Contact('', '', '', '');

    constructor(firstName: string, lastName: string, phoneNumber: string, emailAddress: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }

    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public emailAddress: string;
}
