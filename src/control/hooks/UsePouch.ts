// todo - create local / dev / prod env
import PouchDB from "pouchdb";

export type PouchReturnProps = {
    localDB: PouchDB.Database,
    get: Function,
    put: Function,
}

export function useUserPouch(): any {
    const { localPouch } = usePouch('user')

    async function logInUser(username: string, password: string, ) {
        try {
            console.log(`Finding username: ${username}`)
            /**
             * TODO - left off at "find is not a function"
              */
            const findUser = await localPouch.find({
                selector: username,
                fields: ['_id', 'username', 'password'],
                sort: ['name']
            });
            console.log('findUser', findUser)
        } catch(err) {
            console.log(err);
        }
    }

    async function addUser(username: string, password: string, ) {
        try {
            return await localPouch.put({_id: `org.duncle.${username}`, username, password})
            // return await localPouch.put({_id: new Date().toISOString(), username, password})
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
