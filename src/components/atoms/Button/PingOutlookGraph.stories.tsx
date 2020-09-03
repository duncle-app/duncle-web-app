import React, {useState} from "react";
import {Button} from "@material-ui/core";

import {UserAgentApplication} from "msal";
// Application (client) ID : 9914f345-76dc-4873-b39f-5a7e22a41136
// Directory (tenant) ID : 377a0952-88c9-49c7-948d-82c88230a0b5
// Object ID : 3704c084-7159-4d0e-a263-5e7d1d85a341
const msalConfig = {
    auth: {
        clientId: '9914f345-76dc-4873-b39f-5a7e22a41136',
        redirectUri: 'localhost:9009'
    }
};

const msalInstance = new UserAgentApplication(msalConfig);

msalInstance.handleRedirectCallback((error, response) => {
// handle redirect response or error
});

var loginRequest = {
    // scopes: ["user.read"] // optional Array<string>
};

// let clientOptions: ClientOptions = {
//     authProvider: new OutlookAuthenticationProvider(),
// };
// const client = Client.initWithMiddleware(clientOptions);

const TestButton = () => {
    const [text, setText] = useState("No response");

    return (
        <>
            <Button variant="outlined" onClick={
                async () => {
                    setText("clicked auth button")
                    msalInstance.loginPopup(loginRequest)
                        .then(response => {
                            console.log(response)
                        })
                        .catch(err => {
                            // handle error
                            console.log(err)
                        });
                }}>Authenticate</Button>
            <Button variant="outlined" onClick={
                async () => {
                    setText("graph api button")
                    // let res = await Client.api('/me/calendar')
                    //     .get();
                    // setText(res);
                }}>Ping Outlook Graph</Button>
            <div>{text}</div>
        </>
    )
}

export default {
    title: "Test/OutlookGraph",
    component: TestButton,
};
export const withProps = () => (
    <TestButton/>
);
