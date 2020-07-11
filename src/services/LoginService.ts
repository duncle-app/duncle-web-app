import {useUserPouch} from "../common/hooks/UsePouch";
import User from "../model/user";
import {hash} from "argon2";

type LoginServiceProps = {}

export default class LoginService {
    public async logInUser(user: User) {
        const {fetchUser} = useUserPouch();
        const response: User = await fetchUser(user.email);

        const {password} = response
        console.log(`actual password: ${password}`)
        console.log(`passed in: ${user.password}`)

        // if (await argon2.verify(password, user.password)) {
        if (password === user.password) {
            alert("log in successful! Passwords match")
            return user
        } else {
            throw new Error("Wrong password. Try again or click Forgot password to reset it")
        }
    }

    public async signUpUser({email, password, firstName, lastName}: User) {
        const saltVariable = process.env.REACT_APP_SALT;

        if (!saltVariable) {
            throw new Error(`REACT_APP_SALT is not properly set. 
            Please set up this environment variable to securely save passwords`)
        }

        const hasedPassword = await hash(saltVariable + password);

        const { addUser }: any = useUserPouch();
        return addUser(email, hasedPassword, firstName, lastName)
    }
}
