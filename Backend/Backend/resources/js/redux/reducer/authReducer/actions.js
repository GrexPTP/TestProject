import AuthActionTypes from './types'
export const loginStart = (data) => ({
    type: AuthActionTypes.LOGIN_START,
    payload: data
})
export const loginSuccess = (token) => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: token
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
export const signUpStart = userData => ({
    type: AuthActionTypes.SIGN_UP_START,
    payload: userData
})
export const signUpSuccess = token => ({
    type: AuthActionTypes.SIGN_UP_SUCCESS,
    payload: token
})
export const signUpFailure = error => ({
    type: AuthActionTypes.SIGN_UP_FAILURE,
    payload: error
})