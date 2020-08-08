import {useUserPouch} from "../common/hooks/UsePouch";
import bcrypt from 'bcryptjs'
import UserDAO from "../model/userDAO";
import User from "../model/user";

export default class LoginService {
    public async logInUser(user: User): Promise<UserDAO | Error> {
        const {fetchUser} = useUserPouch();
        const daoUser: UserDAO = await fetchUser(user.email);

        console.log(`actual password: ${daoUser.password}`)
        console.log(`passed in: ${user.password}`)

        if (LoginService.compare(user.password, daoUser.password)) {
            return daoUser
        } else {
            throw new Error("Wrong password. Try again or click Forgot password to reset it")
        }
    }

    public async signUpUser({email, password, firstName, lastName}: User) {
        // @ts-ignore
        const hashedPassword = await LoginService.hash(password);
        const {addUser}: any = useUserPouch();
        return addUser(email, hashedPassword, firstName, lastName)
    }

    // todo - could move these to another class.
    private static hash(password: string): string {
        return bcrypt.hashSync(password);
    }

    public static compare(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash)
    }
}
