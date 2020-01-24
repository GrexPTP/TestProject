import UserActionTypes from './types'
export const getUserStart = token => ({
    type: UserActionTypes.GET_USER_START,
    payload: token
})
export const getUserSuccess = user => ({
    type: UserActionTypes.GET_USER_SUCCESS,
    payload: user
}) 
export const getUserFailure = error => ({
    type: UserActionTypes.GET_USER_FAILURE,
    payload: error
})
export const updateProfileStart = (token, data) => ({
    type: UserActionTypes.UPDATE_PROFILE_START,
    payload: {token, data}
})
export const updateProfileSuccess = user => ({
    type: UserActionTypes.UPDATE_PROFILE_SUCCESS,
    payload: user
})
export const updateProfileFailure = error => ({
    type: UserActionTypes.UPDATE_PROFILE_FAILURE,
    payload: error
}) 