import React, {useState} from "react";
import {Button} from "@material-ui/core";
import axios from 'axios'

// async function getKanye(stateSetter: (value: (((prevState: string) => string) | string)) => void) {
//     const response = await getFetch("https://api.kanye.rest");
//     stateSetter(response.quote)
// }

const getFetch = async (url: string) => {
    const response = await fetch(url)
    return await response.json()
}

const get = async (url: string) => {
    return await axios.get(url, {
        auth: {
            username: '9847c227-5837-4157-b1ef-08b18c937630-bluemix',
            password: 'NONE'
        }
    })
}

const cloudanturl = "https://9847c227-5837-4157-b1ef-08b18c937630-bluemix.cloudant.com"

const TestButton = () => {
    const [text, setText] = useState("No response");

    return (
        <>
            <Button variant="outlined" onClick={async () => {
                const response = await get(`${cloudanturl}/testdb`);
                console.log(response)
                setText(response.data.dbname)
            }}>Make a GET call</Button>
            <div>{text}</div>
        </>
    )
}

export default {
    title: "Test/TestButton",
    component: TestButton,
};
export const withProps = () => (
    <TestButton/>
);
