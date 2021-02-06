import React from "react";
import NewNote from "./NewNote"

export default {
    title: "Atoms/NewNote",
    component: NewNote,
};

export const withProps = () => (
    <NewNote formSubmit={({newNote}) => alert(`submitted! message: ${newNote}`)}/>
);
