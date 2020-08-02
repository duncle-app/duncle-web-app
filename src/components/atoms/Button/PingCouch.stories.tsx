import React from "react";
import PingAnything from "./PingAnything";
import {useLibraryPouch} from "../../../common/hooks/UsePouch";

export default {
    title: "Atoms/Test/PingCouch",
};


export const withProps = () =>
    <PingAnything name="Ping and update the db with a new name" callback={async () => {
        console.log("creating a connection")
        const {getAll, saveEditedLibrary} = useLibraryPouch();
        const response = await getAll();

        const doc = response.rows[0].doc
        console.log("before", doc)
        doc.city = "New City 2"
        console.log("after", doc)
        await saveEditedLibrary(doc)

        const res2 = await getAll();
        const afterDoc = res2.rows[0].doc
        console.log("afterDoc", afterDoc)
    }}/>
