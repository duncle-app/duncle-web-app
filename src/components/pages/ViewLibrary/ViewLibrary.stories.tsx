import React from "react";
import ViewLibrary from "./ViewLibrary";
import { BrowserRouter as Router } from "react-router-dom";
import { dummyUserDAO, newLibrary } from "../../storybook-mocks/constants";
import { GlobalContext } from "../../../common/GlobalContext";

export default {
  title: "Pages/ViewLibrary",
  component: ViewLibrary,
};

export const Default = () => (
  <GlobalContext.Provider
    value={{
      currentLibrary: newLibrary,
      getAuthenticatedUser: () => dummyUserDAO,
    }}
  >
    <Router>
      <ViewLibrary />
    </Router>
  </GlobalContext.Provider>
);
