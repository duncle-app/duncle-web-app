import {useUserPouch} from "../common/hooks/UsePouch";
import User from "../model/user";

type LoginServiceProps = {}

export default class LoginService {
    public async logInUser(user: User) {
        const {fetchUser} = useUserPouch();
        const response: User = await fetchUser(user.email);

        const {password} = response
        console.log(`actual password: ${password}`)
        console.log(`passed in: ${user.password}`)

        if (password === user.password) {
            alert("log in successful! Passwords match")
            return user
        } else {
            throw new Error("Wrong password. Try again or click Forgot password to reset it")
        }
    }
}
