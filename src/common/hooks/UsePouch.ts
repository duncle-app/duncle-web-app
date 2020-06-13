// todo - create local / dev / prod env
import PouchDB from "pouchdb";
import User from "../../model/user";
import {Err, err, ok, Result, ResultAsync} from "neverthrow";

export type PouchReturnProps = {
    localDB: PouchDB.Database,
    get: Function,
    put: Function,
}

const USER_ID_PREFIX = "org.duncle.";

export function useUserPouch() {
    const { localPouch } = usePouch('user')

    function fetchUser(inputEmail: string): ResultAsync<User, Error> {
        console.log(`Finding username: ${inputEmail}`);
        return ResultAsync.fromPromise(
            localPouch.get(`${USER_ID_PREFIX}${inputEmail}`),
            () => new Error("Attempt to find user failed"));
    }

    async function addUser({email, password, firstName, lastName}: User) {
        try {
            return await localPouch.put({_id: `${USER_ID_PREFIX}${email}`, email, password, firstName, lastName})
        } catch(err) {
            console.log(err);
        }
    }

    return {localPouch, addUser, fetchUser}
}

/**
 * Returns
 */
export function useLibraryPouch(): any {
    return usePouch('tcrm')
}

function usePouch(database: string): any {
    const localPouch: PouchDB.Database = new PouchDB(database)

    const remoteDatabase: PouchDB.Database = new PouchDB(`http://127.0.0.1:5984/${database}`);

    async function getInfo() {
        console.log('Local db info:', await localPouch.info());
        console.log('Remote db info:', await remoteDatabase.info());
    }

    async function get(docId: any){
        try {
            return await localPouch.get(docId);
        } catch (err) {
            console.log(err);
        }
    }

    async function put(docId: string, title: string) {
        try {
            return await localPouch.put({_id: docId, title})
        } catch(err) {
            console.log(err);
        }
    }

    getInfo()

    // Setup database sync
    localPouch.sync(remoteDatabase, {
        live: true,
    }).on('change', function() {
        console.log('db changed');
    }).on('error', function() {
        console.log('sync error');
    });

    return {localPouch, get, put};
}
