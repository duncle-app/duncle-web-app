import useAuth from "./useAuth";
import {renderHook, act} from "@testing-library/react-hooks";
import {dummyUserDAO} from "../../../components/storybook-mocks/constants";

describe('Auth hooks - authentication flow tests', () => {
    const {result} = renderHook(() => useAuth())

    function testAuthentication(title: string, callbackFunction: Function, expectedResult: any) {
        test(title, () => {
            act(() => {
                callbackFunction()
            })
            const authResult = result.current.isAuthenticated
            expect(authResult).toBe(expectedResult)
        })
    }

    const noCallback = () => console.log("do nothing")
    testAuthentication('On page load, isAuthenticated should return false since we haven\'t authenticated', noCallback, false)

    const authCallback = () => result.current.authenticate(dummyUserDAO)
    testAuthentication('If we call authentication, isAuthenticated should return true', authCallback, true)

    test('Test if getAuthenticatedUser returns the correct user', () => {
        const getUserResult = result.current.getAuthenticatedUser()
        console.log({getUserResult})
        expect(getUserResult).toEqual(dummyUserDAO)
    })

    testAuthentication('If we call signout, isAuthenticated should return false', result.current.signout, false)

    // todo - future: fast forward time past 1 hour and test if still authenticated
})
