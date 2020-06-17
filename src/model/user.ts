export default class User {
    public static None: User = new User(
        "None",
        "None",
        "None",
        "None",
        "None",
        "None",
    );

    public _id?: string;
    public _rev?: string;
    public email: string;
    public password?: string;
    public firstName: string;
    public lastName: string;

    constructor(email: string,
                password: string = "",
                firstName: string,
                lastName: string,
                id: string = "",
                rev: string = ""
    ) {
        this._id = id;
        this._rev = rev;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
