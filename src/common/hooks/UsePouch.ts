// todo - create local / dev / prod env
import PouchDB from "pouchdb";
import User from "../../model/user";
import Library from "../../model/library";

export type PouchReturnProps = {
    localDB: PouchDB.Database,
    get: Function,
    put: Function,
}

const USER_ID_PREFIX = "org.duncle.";

export function useUserPouch() {
    const {localPouch} = usePouch('user')

    async function fetchUser(inputEmail: string): Promise<User> {
        console.log(`Finding username: ${inputEmail}`);
        try {
            return await localPouch.get(`${USER_ID_PREFIX}${inputEmail}`);
        } catch (e) {
            console.error("error:", e)
            throw new RecordNotFoundError("Error when making database call", e);
        }
    }

    async function addUser({email, password, firstName, lastName}: User) {
        try {
            return await localPouch.put({_id: `${USER_ID_PREFIX}${email}`, email, password, firstName, lastName})
        } catch (err) {
            console.error(err);
            throw new Error(`Unable to save user: ${err}`)
        }
    }

    return {localPouch, addUser, fetchUser}
}

export type PouchError = {
    docId: string;
    error: boolean;
    message: string;
    name: string;
    reason: string;
    status: number;
}

class RecordNotFoundError extends Error {
    private pouchError: PouchError;

    constructor(message: string, pouchError: PouchError) {
        const {status, name, message: pouchMessage} = pouchError

        super(`${message}: status: ${status}, exception: ${name}, message: ${pouchMessage} `);
        this.pouchError = pouchError;
    }
}

class EnvVariableNotSetError extends Error {
    constructor(envVar: string) {
        super(`${envVar} is not properly set. 
        Please set up this environment variable to connect to a remote database`);
    }
}

/**
 * Returns
 */
export function useLibraryPouch(): any {
    const {localPouch} = usePouch('tcrm')

    async function getAll(): Promise<PouchDB.Core.AllDocsResponse<Library>> {
        try {
            return await localPouch.allDocs({include_docs: true})
        } catch (err) {
            throw new Error("Failed to get all docs")
        }
    }

    async function saveEditedLibrary(library: Library) {
        try {
            return await localPouch.put(library);
        } catch (err) {
            throw new Error("Failed to get all docs")
        }
    }

    return {getAll, saveEditedLibrary}
}

function usePouch(database: string): any {
    const localPouch: PouchDB.Database = new PouchDB(database)

    const remoteDb = process.env.REACT_APP_DATABASE_URL
    const dbUsername = process.env.REACT_APP_DATABASE_USERNAME
    const dbPassword = process.env.REACT_APP_DATABASE_PASSWORD

    if (!remoteDb) {
        throw new EnvVariableNotSetError("REACT_APP_DATABASE_URL")
    }
    if (!dbUsername) {
        throw new EnvVariableNotSetError("REACT_APP_DATABASE_USERNAME")
    }
    if (!dbPassword) {
        throw new EnvVariableNotSetError("REACT_APP_DATABASE_PASSWORD")
    }

    const remoteDatabase: PouchDB.Database = new PouchDB(`http://${dbUsername}:${dbPassword}@${remoteDb}/${database}`);

    async function getInfo() {
        console.log('Local db info:', await localPouch.info());
        console.log('Remote db info:', await remoteDatabase.info());
    }

    async function get(docId: any) {
        try {
            return await localPouch.get(docId);
        } catch (err) {
            console.log(err);
        }
    }

    async function put(docId: string, title: string) {
        try {
            return await localPouch.put({_id: docId, title})
        } catch (err) {
            console.log(err);
        }
    }

    getInfo()

    // Setup database sync
    localPouch.sync(remoteDatabase, {
        live: true,
    }).on('change', function () {
        console.log('db changed');
    }).on('error', function () {
        console.log('sync error');
    });

    return {localPouch, get, put};
}
