import useAuth from "./useAuth";
import {renderHook, act} from "@testing-library/react-hooks";


describe('Auth hooks tests', () => {
    const {result} = renderHook(() => useAuth())

    function testAuthentication(title: string, callbackFunction: Function, expectedResult: any) {
        test(title, () => {
            act(() => {
                callbackFunction()
            })
            const authResult = result.current.isAuthenticated('dummy')
            expect(authResult).toBe(expectedResult)
        })
    }

    testAuthentication('On page load, isAuthenticated should return false since we haven\'t authenticated', () => console.log("do nothing"), false)
    testAuthentication('If we call authentication, isAuthenticated should return true', result.current.authenticate, true)
    testAuthentication('If we call signout, isAuthenticated should return false', result.current.signout, false)
})