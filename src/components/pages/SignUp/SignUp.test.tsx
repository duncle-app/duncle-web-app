import React from 'react'
import SignUp from "./SignUp";
import MockProviders from "../../storybook-mocks/MockProviders";
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

const changeElementValue = (
    element: Document | Element | Window | Node,
    value: string) =>
    fireEvent.input(element, {target: {value}})

const getButton = (name: string) => {
    const regExp = new RegExp(name, 'i');
    return screen.getByRole('button', {name: regExp});
}

const getTextBox = (name: string) => {
    const regExp = new RegExp(name, 'i');
    return screen.getByRole('textbox', {name: regExp});
}

const setup = () => render(
    <MockProviders>
        <SignUp/>
    </MockProviders>
)

describe('Sign Up Page tests', () => {
    it('renders the page', async () => {
        const renderedPage = setup()

        const email = getTextBox('email address')
        const firstName = getTextBox('first name')
        const lastName = getTextBox('last name')
        const password = screen.getByLabelText(/^password/i)
        const confirmPassword = screen.getByLabelText(/confirm password/i)

        await changeElementValue(email, 'em@test.com')
        await changeElementValue(firstName, 'test first name')
        await changeElementValue(lastName, 'test last name')
        await changeElementValue(password, 'testpassword')
        await changeElementValue(confirmPassword, 'testpassword')

        const createAccountButton = getButton('create account')
        await fireEvent.click(createAccountButton)

        // need to add useNotification provider to the test
        // const popUp = await screen.findByText(/sign up successful\. welcome test!/i)
        // console.log(renderedPage)
        // expect(popUp).toBeTruthy()
    })
    // do one test for all valid inputs

    // do one for invalid email
    //  check for validation errors on the screen (if they exist)
    // check for the snackbar message
})