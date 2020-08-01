import React from "react";
import PingAnything from "./PingAnything";
import {useLibraryPouch} from "../../../common/hooks/UsePouch";

export default {
    title: "Atoms/Test/PingCouch",
};


export const withProps = () => {

    return (
        <PingAnything name="ping couch" callback={() => {
            console.log("creating a connection")
            const libPouch = useLibraryPouch();
        }}/>
    );
}
