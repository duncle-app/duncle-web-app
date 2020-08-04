import React from "react";
import PingAnything from "./PingAnything";
import {useLibraryPouch} from "../../../common/hooks/UsePouch";
import {storiesOf} from "@storybook/react";
import {Button} from "@material-ui/core";

export default {
    title: "Atoms/Test/PingCouch",
};


export const withProps = () =>
    <PingAnything name="Ping and update the db with a new name" callback={async () => {
        console.log("creating a connection")
        const {getAll, saveLibrary} = useLibraryPouch();
        try {
            const response = await getAll();
            const doc = response.rows[0].doc
            if (!!doc) {
                console.log("before", doc)
                doc.city = "New City 2"
                console.log("after", doc)
                await saveLibrary(doc)

                const res2 = await getAll();
                const afterDoc = res2.rows[0].doc
                console.log("afterDoc", afterDoc)
            }
        } catch (e) {
            alert(`Error ${e}`)
        }

    }}/>
