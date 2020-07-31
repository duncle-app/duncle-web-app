import {useUserPouch} from "../common/hooks/UsePouch";
import User from "../model/user";
import bcrypt from 'bcryptjs'

export default class LoginService {
    public async logInUser(user: User) {
        const {fetchUser} = useUserPouch();
        const response: User = await fetchUser(user.email);

        const {password} = response

        console.log(`actual password: ${password}`)
        console.log(`passed in: ${user.password}`)
        console.log(`hashed passed in: ${user.password}`)

        // @ts-ignore
        // todo - better typing? maybe password shouldn't be optional?
        if (LoginService.compare(user.password, password)) {
            alert("log in successful! Passwords match")
            return user
        } else {
            throw new Error("Wrong password. Try again or click Forgot password to reset it")
        }
    }

    public async signUpUser({email, password, firstName, lastName}: User) {
        // @ts-ignore
        const hashedPassword = await LoginService.hash(password);
        const { addUser }: any = useUserPouch();
        return addUser(new User(email, hashedPassword, firstName, lastName))
    }

    // todo - could move these to another class.
    private static hash(password: string): string {
        return bcrypt.hashSync(password);
    }

    public static compare(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash)
    }
}
