import React from "react";
import ViewLibrary from "./ViewLibrary";
import { BrowserRouter as Router } from "react-router-dom";
import { dummyUserDAO, newLibrary } from "../../storybook-mocks/constants";
import { LibraryProvider } from "../../../common/providers/LibraryProvider";

export default {
  title: "Pages/ViewLibrary",
  component: ViewLibrary,
};

export const Default = () => (
  <LibraryProvider
    value={{
      currentLibrary: newLibrary,
      getAuthenticatedUser: () => dummyUserDAO,
    }}
  >
    <Router>
      <ViewLibrary />
    </Router>
  </LibraryProvider>
);
