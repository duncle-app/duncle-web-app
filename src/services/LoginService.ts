import {FetchResult, PouchError, useUserPouch} from "../common/hooks/UsePouch";
import User from "../model/user";
import {Err, err, errAsync, ok, okAsync, Result, ResultAsync} from "neverthrow";

type LoginServiceProps = {}

export default class LoginService {

    private OnSuccess(user: User) {
        alert(`got user: ${user.firstName}`)
    }

    private displayError(error: Error) {
        alert(`Error!!!: ${error.message}`)
    }

    public async logInUser(user: User) {
        const {fetchUser} = useUserPouch();
        console.log(user)
        const {email} = user;

        try {
            const response: FetchResult  = await fetchUser(email);

            console.log("what is this", response)
            console.log("does this work", !!(response as User))



            if ((response as User)) {
                const { password } = <User>response
                console.log(`got here: ${password}`)
                if (password === user.password) {
                    alert("log in successful! Passwords match")
                    return user
                } else {
                    new Error("Wrong password. Try again or click Forgot password to reset it")
                }
                console.log("it's a user!", );
            } else {
                const {message, reason, status} = <PouchError>response
                console.log(`ERROR! ${status} message: ${message}, reason: ${reason}`)
            }


            console.log('response in log in service', response);
        } catch (e) {
            console.log("Failed to call database:", e)
            alert(`Failed to find : ${e.message}`)
        }

        // const response: ResultAsync<User, Error> = fetchUser(email)
        //
        // return response.then(val => {
        //     if (val.isOk()) {
        //         return ok(val)
        //     } else {
        //         return err(new Error("d"))
        //     }
        // })
        // response
        //     /**
        //      * If fetchUser returns OK, then .map allows us to act on that return object (User object)
        //      */
        //     .map(validUser => {
        //     if (validUser.password === user.password) {
        //         return ok(user)
        //     } else {
        //         return err(new Error("Wrong password. Try again or click Forgot password to reset it"))
        //     }
        // })
        //     /**
        //      * If the fetchUser returns an error, we handle it with .mapErr
        //      * See https://github.com/supermacro/neverthrow
        //      */
        //     .mapErr(e => {
        //         return err(e)
        //     })
    }
}
