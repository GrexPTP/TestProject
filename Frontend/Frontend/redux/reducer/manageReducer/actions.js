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
export const getIndividualStart = (token, id, navigation) => ({
    type: ManageActionTypes.GET_INDIVIDUAL_START,
    payload: {
        token,
        id,
        navigation
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
export const updateIndividualStart = (token, data) => ({
    type: ManageActionTypes.UPDATE_INDIVIDUAL_START,
    payload: {
        token,
        data
    }
})
export const updateIndividualSuccess = individual => ({
    type: ManageActionTypes.UPDATE_INDIVIDUAL_SUCCESS,
    payload: individual
})
export const updateIndividualFailure = error => ({
    type: ManageActionTypes.UPDATE_INDIVIDUAL_FAILURE,
    payload: error
})
export const createIndividualStart = userData => ({
    type: ManageActionTypes.CREATE_INDIVIDUAL_START,
    payload: userData
})
export const createIndividualSuccess = token => ({
    type: ManageActionTypes.CREATE_INDIVIDUAL_SUCCESS,
    payload: token
})
export const createIndividualFailure = error => ({
    type: ManageActionTypes.CREATE_INDIVIDUAL_FAILURE,
    payload: error
})
export const deleteIndividualStart = (token, id) => ({
    type: ManageActionTypes.DELETE_INDIVIDUAL_START,
    payload: {
        token,
        id
    }
})
export const deleteIndividualSuccess = individual => ({
    type: ManageActionTypes.DELETE_INDIVIDUAL_SUCCESS,
    payload: individual
})
export const deleteIndividualFailure = error => ({
    type: ManageActionTypes.DELETE_INDIVIDUAL_FAILURE,
    payload: error
})