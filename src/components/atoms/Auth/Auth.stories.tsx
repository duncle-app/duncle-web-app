import React, {useContext} from "react";
import {GlobalContext, GlobalProvider} from "../../../common/GlobalContext";
import PingAnything from "../Button/PingAnything";

export default {
    title: "Atoms/Auth"
};

export const withProps = () => {

    return (
        <GlobalProvider>
            <Auth/>
        </GlobalProvider>
    )
}

const Auth = () => {
    const {isAuthenticated, authenticate} = useContext(GlobalContext)

    return (
        <PingAnything callback={() => {
            console.log("authenticating", authenticate())
            const key = isAuthenticated({id:"value101"})
            console.log("is authenticated!", key)

        }} name="Ping me"/>
    )
}
