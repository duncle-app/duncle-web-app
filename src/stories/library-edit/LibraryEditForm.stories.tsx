import React from "react";
import LibraryEdit from "../../library-edit/components/library-edit";
import Library from "../../model/library";

export default {
  title: "Library Edit",
  component: LibraryEdit,
};

const newLibrary: Library = new Library(
  "Mr. Sir Lib",
  "Hi Skool",
  "100",
  "Mr. Sir City",
  "MN",
  "Mr.Sir",
  "111111",
  "1111 Mr.Street"
);

/* const newLibrary: LibraryManager = new LibraryManager('','') */

export const Props = () => <LibraryEdit library={newLibrary} />;

export const noProps = () => <LibraryEdit />;
