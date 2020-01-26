import { takeLatest, put, all, call } from 'redux-saga/effects';
import ManageActionTypes from './types'
import {getListSuccess, getListFailure, getIndividualSuccess, getIndividualFailure, updateIndividualSuccess, updateIndividualFailure} from './actions'
export function* getList({payload: {token, role_id}}){
    try {
        const response = yield fetch('http://127.0.0.1:8000/api/list',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({
                role_id
            })
        })
        const result = yield response.json()
        yield put(getListSuccess(result.success))
    } catch (error) {
        yield put(getListFailure(error))
    }    
}
export function* getIndividual({payload: {token, id}}){
    try {
        const response = yield fetch('http://127.0.0.1:8000/api/individual',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({
                id
            })
        })
        const result = yield response.json()
        yield put(getIndividualSuccess(result.success))
    } catch (error) {
        yield put(getIndividualFailure(error))
    }    
}
export function* updateIndividual({payload: {token, data}}){
    try {
        const {id, name, password, confirmPassword, phone, IDNumber, address, avaPictures, frontPictures, backPictures } = data
        const response = yield fetch('http://127.0.0.1:8000/api/update_individual',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({
                id,
                name,
                password,
                c_password: confirmPassword,
                phone,
                id_number: IDNumber,
                address,
                avaPictures,
                frontPictures,
                backPictures
            })
        })
        const result = yield response.json()
        yield put(updateIndividualSuccess(result.success))
    } catch (error) {
        yield put(updateIndividualFailure(error))
    }    
}
export function* onGetListStart(){
    yield takeLatest(ManageActionTypes.GET_LIST_START, getList)
}
export function* onGetIndividualStart(){
    yield takeLatest(ManageActionTypes.GET_INDIVIDUAL_START, getIndividual)
}
export function* onUpdateIndividualStart(){
    yield takeLatest(ManageActionTypes.UPDATE_INDIVIDUAL_START, updateIndividual)
}
export function* manageSagas(){
    yield all([
        call(onGetListStart),
        call(onGetIndividualStart),
        call(onUpdateIndividualStart)
    ])
}