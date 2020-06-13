// todo - create local / dev / prod env
import PouchDB from "pouchdb";
import User from "../../model/user";

export type PouchReturnProps = {
    localDB: PouchDB.Database,
    get: Function,
    put: Function,
}

const USER_ID_PREFIX = "org.duncle.";

export type FetchResult = PouchError | User

export type PouchError = {
    docId: string;
    error: boolean;
    message: string;
    name: string;
    reason: string;
    status: number;
}

export function useUserPouch() {
    const { localPouch } = usePouch('user')

    async function fetchUser(inputEmail: string): Promise<FetchResult> {
        console.log(`Finding username: ${inputEmail}`);
        try {
            return await localPouch.get(`${USER_ID_PREFIX}${inputEmail}`);
        } catch (e) {
            return e
        }
        // return ResultAsync.fromPromise(
        //     localPouch.get(`${USER_ID_PREFIX}${inputEmail}`),
        //     (e) => new Error(`Attempt to find user failed: ${e}`));
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
