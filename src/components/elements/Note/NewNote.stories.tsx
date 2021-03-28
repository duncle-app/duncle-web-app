import React from "react";
import NewNote from "./NewNote";

export default {
  title: "Elements/NewNote",
  component: NewNote,
};

export const Default = () => (
  <NewNote
    formSubmit={({ newNote }) => alert(`submitted! message: ${newNote}`)}
  />
);
