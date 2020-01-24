import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './types'
import { getUserSuccess, getUserFailure, updateProfileSuccess, updateProfileFailure} from './actions'
export function* getUser({payload}){
    try {
        const response = yield fetch('http://127.0.0.1:8000/api/details',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${payload}`
              }
        })
        
        const result = yield response.json()
        yield put(getUserSuccess(result.success))
    } catch (error) {
        yield put(getUserFailure(error))
    }

}
export function* updateProfile({payload: {token, data}}){
    try{
        const {name, password, confirmPassword, phone, IDNumber, address, avaPictures, frontPictures, backPictures } = data
        const response = yield fetch('http://127.0.0.1:8000/api/update_profile',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({
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
        yield console.log(result)
        yield put(updateProfileSuccess(result.success))
    }catch(error){
        yield put(updateProfileFailure(error))
    }
}
export function* onGetUserStart(){
    yield takeLatest(UserActionTypes.GET_USER_START, getUser)
}
export function* onUpdateProfileStart(){
    yield takeLatest(UserActionTypes.UPDATE_PROFILE_START, updateProfile)
}
export function* userSagas(){
    yield all([
        call(onGetUserStart),
        call(onUpdateProfileStart)
    ])
}