import React from "react";
import UserEvents from "./UserEvents";
import moment from "moment";

export default {
    title: "Atoms/UserEvents"
};

function createData(name: string, meetingTime: Date, rep: string) {
    return {name, meetingTime, rep};
}

const normalDate = moment().toDate()
console.log("normal date here")
console.log(normalDate)

const date = moment().format()
console.log("date here")
console.log(date)

const month = moment(date).format("MMMM do, H:mm")
console.log("month here")
console.log(month)

const rows = [
    createData('Minneapolis Washburn', normalDate, 'Terry'),
    createData('Westside Elementary', normalDate, 'Terry'),
    createData('Mr. Sir High School', normalDate, 'Terry'),
    createData('Lakeville North', normalDate, 'Terry'),
];

export const withProps = () =>
    <UserEvents events={rows}/>
