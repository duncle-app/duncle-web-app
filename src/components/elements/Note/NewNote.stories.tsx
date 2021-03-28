import React from "react";
import NewNote from "./NewNote";

export default {
  title: "Atoms/NewNote",
  component: NewNote,
};

export const Default = () => (
  <NewNote
    formSubmit={({ newNote }) => alert(`submitted! message: ${newNote}`)}
  />
);
