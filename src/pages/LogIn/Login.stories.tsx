import React from 'react'
import Login from "./Login";
import LoginController from "./Login";

export default {
    title: `Pages/Login`,
    component: LoginController,
};

export const withProps = () => <Login/>;
