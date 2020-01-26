import ManageActionTypes from './types'
export const getListStart = (token, role_id) => ({
    type: ManageActionTypes.GET_LIST_START,
    payload: {
        token,
        role_id
    }
})
export const getListSuccess = list =>({
    type: ManageActionTypes.GET_LIST_SUCCESS,
    payload: list
})
export const getListFailure = error => ({
    type: ManageActionTypes.GET_LIST_FAILURE,
    payload: error
})
export const getIndividualStart = (token, id) => ({
    type: ManageActionTypes.GET_INDIVIDUAL_START,
    payload: {
        token,
        id
    }
})
export const getIndividualSuccess = individual =>({
    type: ManageActionTypes.GET_INDIVIDUAL_SUCCESS,
    payload: individual
})
export const getIndividualFailure = error => ({
    type: ManageActionTypes.GET_INDIVIDUAL_FAILURE,
    payload: error
})