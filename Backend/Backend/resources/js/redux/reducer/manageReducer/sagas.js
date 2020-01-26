import { takeLatest, put, all, call } from 'redux-saga/effects';
import ManageActionTypes from './types'
import {getListSuccess, getListFailure, getIndividualSuccess, getIndividualFailure} from './actions'
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
export function* onGetListStart(){
    yield takeLatest(ManageActionTypes.GET_LIST_START, getList)
}
export function* onGetIndividualStart(){
    yield takeLatest(ManageActionTypes.GET_INDIVIDUAL_START, getIndividual)
}
export function* manageSagas(){
    yield all([
        call(onGetListStart),
        call(onGetIndividualStart)
    ])
}