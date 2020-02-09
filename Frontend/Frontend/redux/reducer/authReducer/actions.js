import AuthActionTypes from './types'
export const loginStart = (data, navigation) => ({
    type: AuthActionTypes.LOGIN_START,
    payload: {data, navigation}
})
export const loginSuccess = (token, role) => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload:{token, role}
})
export const loginFailure = error => ({
    type: AuthActionTypes.LOGIN_FAILURE,
    payload: error
})
export const signOutStart = () => ({
    type: AuthActionTypes.SIGN_OUT_START
})
export const signOutSuccess = () => ({
    type: AuthActionTypes.SIGN_OUT_SUCCESS
})
export const signOutFailure = () => ({
    type: AuthActionTypes.SIGN_OUT_FAILURE
}) 
export const signUpStart = (userData, navigation) => ({
    type: AuthActionTypes.SIGN_UP_START,
    payload: {userData, navigation}
})
export const signUpSuccess = (token, role) => ({
    type: AuthActionTypes.SIGN_UP_SUCCESS,
    payload: {token, role}
})
export const signUpFailure = error => ({
    type: AuthActionTypes.SIGN_UP_FAILURE,
    payload: error
})