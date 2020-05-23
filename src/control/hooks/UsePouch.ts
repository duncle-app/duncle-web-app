// todo - create local / dev / prod env
import PouchDB from "pouchdb";

export interface PouchReturnProps {
    localDB: PouchDB.Database,
    get: Function,
    put: Function,
}

export function usePouch(): any {
    const localPouch: PouchDB.Database = new PouchDB('tcrm')

    const remoteDatabase: PouchDB.Database = new PouchDB('http://127.0.0.1:5984/tcrm');

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

    console.log(getInfo())

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



// const initializePouch = async (env: string) => {
//     const localDb = new PouchDB('tcrm');
//     GlobalContext.add(localDb)
//     let remoteDb
//     if (env == 'local') {
//         remoteDb = new PouchDB('http://127.0.0.1:5984/tcrm');
//     } else {
//         remoteDb = new PouchDB('https://9847c227-5837-4157-b1ef-08b18c937630-bluemix.cloudant.com/testdb');
//     }
//
//     const localInfo = await localDb.info();
//     console.log('local info:',localInfo);
//
//     const remoteInfo = await remoteDb.info();
//     console.log('remote info:',remoteInfo);
// };
