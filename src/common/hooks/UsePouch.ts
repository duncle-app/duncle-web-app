// todo - create local / dev / prod env
import PouchDB from "pouchdb";
import UserDAO from "../../model/userDAO";
import Library from "../../model/library";
import User from "../../model/user";
import NewLibrary from "../../model/newLibrary";
import {useContext} from "react";
import {GlobalContext} from "../GlobalContext";

export type PouchReturnProps = {
    localDB: PouchDB.Database,
    get: Function,
    put: Function,
}

export interface UseUserReturnProps {
    addUser(props : User) : Promise<PouchDB.Core.Response | Error>
    updateUser(props : UserDAO) : Promise<PouchDB.Core.Response | Error>
    localPouch: any
    fetchUser(props: any): any
}

interface AddUserProps {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const USER_ID_PREFIX = "org.duncle.";

export function useUserPouch() : UseUserReturnProps {
    const {localPouch} = usePouch('user')

    async function fetchUser(inputEmail: string): Promise<UserDAO> {
        console.log(`Finding username: ${inputEmail}`);
        try {
            return await localPouch.get(`${USER_ID_PREFIX}${inputEmail}`);
        } catch (e) {
            if (e.status === 404) {
                throw new Error(`User not found ${inputEmail}`)
            }
            console.error("error:", e);
            throw new Error(`Error when making database call ${e}`);
        }
    }

    async function addUser(props: User): Promise<PouchDB.Core.Response | Error> {
        try {
            return await localPouch.put({_id: `${USER_ID_PREFIX}${props.email}`, ...props})
        } catch (err) {
            if (err.status === 409) {
                return new Error("Email address is already in use")
            }
            console.error("Pouch error", err);
            // todo - gonna have to return this error
            return new Error(`Unable to save user: ${err}`)
        }
    }

    async function updateUser(props: UserDAO): Promise<PouchDB.Core.Response | Error> {
        try {
            return await localPouch.put(props)
        } catch (err) {
            console.error(err);
            throw new Error(`Unable to save event: ${err}`)
        }
    }

    return {localPouch, addUser, fetchUser, updateUser}
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
interface useLibraryPouchReturn {
    getAll(): Promise<PouchDB.Core.AllDocsResponse<Library>>
    getLibrary(libraryId: string): any
    saveLibrary(library: Library): Promise<PouchDB.Core.Response | Error>
    addLibrary(library: NewLibrary): Promise<PouchDB.Core.Response | Error>
}

function roundDecimals(library: Library | NewLibrary) {
    library.lastSale = Number(library.lastSale.toFixed(2))
    library.totalSales = Number(library.totalSales.toFixed(2))
}

export function useLibraryPouch(): useLibraryPouchReturn {
    // value.username
    const {getAuthenticatedUser} = useContext(GlobalContext)

    const USER_DB_PREFIX = 'user_'
    const {localPouch} = usePouch(`${USER_DB_PREFIX}${getAuthenticatedUser().username}`)

    async function getAll(): Promise<PouchDB.Core.AllDocsResponse<Library>> {
        try {
            return await localPouch.allDocs({include_docs: true})
        } catch (err) {
            throw new Error("Failed to get all docs")
        }
    }

    async function getLibrary(libraryId: string): Promise<PouchDB.Core.AllDocsResponse<Library>> {
        try {
            return await localPouch.get(libraryId)
        } catch (err) {
            throw new Error("Failed to get all docs")
        }
    }

    async function saveLibrary(library: Library): Promise<PouchDB.Core.Response | Error> {
        try {
            roundDecimals(library);
            return await localPouch.put(library);
        } catch (err) {
            throw new Error(`Failed to save the library: ${err}`)
        }
    }

    async function addLibrary(library: NewLibrary): Promise<PouchDB.Core.Response | Error> {
        try {
            roundDecimals(library)
            return await localPouch.put(library);
        } catch (err) {
            throw new Error(`Failed to add the library: ${err}`)
        }
    }

    return {getAll, getLibrary, saveLibrary, addLibrary}
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

    const remoteDatabase: PouchDB.Database = new PouchDB(`https://${dbUsername}:${dbPassword}@${remoteDb}/${database}`);

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
    // Read more at https://pouchdb.com/guides/replication.html
    localPouch.sync(remoteDatabase, {
        live: true,
        retry: true
    }).on('change', function () {
        console.log('db changed');
    }).on('error', function () {
        console.log('sync error');
    });

    return {localPouch, get, put};
}
