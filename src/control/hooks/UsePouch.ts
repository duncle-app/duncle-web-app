// todo - create local / dev / prod env
import PouchDB from "pouchdb";

export function usePouch(): any {
    const localPouch = new PouchDB('tcrm')

    async function get(docId: any){
        try {
            return await localPouch.get(docId);
        } catch (err) {
            console.log(err);
        }
    }

    return {localPouch, get};
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
