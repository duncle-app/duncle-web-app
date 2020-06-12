// todo - create local / dev / prod env
import PouchDB from "pouchdb";
import User from "../../model/user";

export type PouchReturnProps = {
    localDB: PouchDB.Database,
    get: Function,
    put: Function,
}

const USER_ID_PREFIX = "org.duncle.";

export function useUserPouch(): any {
    const { localPouch } = usePouch('user')

    async function logInUser(email: string, password: string, ) {
        try {
            console.log(`Finding username: ${email}`);
            /**
             * TODO - now to make sure the password is the same, validate that way
              */
            const user: User =  await localPouch.get(`${USER_ID_PREFIX}${email}`);
            console.log('user', user);
        } catch(err) {
            console.log(err);
        }
    }

    async function addUser({email, password, firstName, lastName}: User) {
        try {
            return await localPouch.put({_id: `${USER_ID_PREFIX}${email}`, email, password, firstName, lastName})
        } catch(err) {
            console.log(err);
        }
    }

    return {localPouch, addUser, logInUser}
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
