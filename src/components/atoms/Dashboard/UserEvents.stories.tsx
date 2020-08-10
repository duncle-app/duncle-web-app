import React from "react";
import UserEvents from "./UserEvents";

export default {
    title: "Atoms/UserEvents"
};

function createData(name: string, day: string, time: string, rep: string) {
    return {name, day, time, rep};
}

const rows = [
    createData('Minneapolis Washburn', 'March 5th', '14:00', 'Terry'),
    createData('Westside Elementary', 'August 9th', '12:00', 'Terry'),
    createData('Mr. Sir High School', 'August 25th', '8:00', 'Terry'),
    createData('Lakeville North', 'September 1st', '18:30', 'Terry'),
];

export const withProps = () =>
    <UserEvents events={rows}/>
