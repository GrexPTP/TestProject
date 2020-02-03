import { takeLatest, put, all, call } from 'redux-saga/effects';
import ManageActionTypes from './types'
import {getListSuccess, getListFailure, getIndividualSuccess, getIndividualFailure, updateIndividualSuccess, updateIndividualFailure, createIndividualFailure, deleteIndividualFailure} from './actions'
export function* getList({payload: {token, role_id}}){
    try {
        const response = yield fetch('http://tkb.miennam24h.vn/api/list',{
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
export function* getIndividual({payload: {token, id, navigation}}){
    try {
        const response = yield fetch('http://tkb.miennam24h.vn/api/individual',{
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
        yield navigation.navigate('Detail',{
            id
        })
    } catch (error) {
        yield console.log(JSON.stringify(error))
        yield put(getIndividualFailure(error))
    }    
}
export function* updateIndividual({payload: {token, data}}){
    try {
        const {id, name, password, confirmPassword, phone, IDNumber, address, avaPictures, frontPictures, backPictures } = data
        const response = yield fetch('http://tkb.miennam24h.vn/api/update_individual',{
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
export function* createIndividual({ payload : {name, email, password, confirmPassword, phone, IDNumber, role_id} }) {
    try {
        const response = yield fetch(`http://tkb.miennam24h.vn/api/signup`,{
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              name,
              email,
              password,
              c_password: confirmPassword,
              phone,
              id_number: IDNumber,
              role_id
          })
        })
        const result =  yield response.json()
        yield console.log(result)
        yield put(push('/admin/dashboard'));  
    } catch(err) {
        yield put(createIndividualFailure(err))
    }
}
export function* deleteIndividual({payload: {token, id}}){
    try {
        const response = yield fetch('http://tkb.miennam24h.vn/api/delete_individual',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({
                id,
            })
        })
    } catch (error) {
        yield put(deleteIndividualFailure(error))
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
export function* onCreateIndividualStart(){
    yield takeLatest(ManageActionTypes.CREATE_INDIVIDUAL_START, createIndividual)
}
export function* onDeleteIndividualStart(){
    yield takeLatest(ManageActionTypes.DELETE_INDIVIDUAL_START, deleteIndividual)
}
export function* manageSagas(){
    yield all([
        call(onGetListStart),
        call(onGetIndividualStart),
        call(onUpdateIndividualStart),
        call(onCreateIndividualStart),
        call(onDeleteIndividualStart)
    ])
}