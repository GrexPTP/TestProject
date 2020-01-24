import { takeLatest, put, all, call } from 'redux-saga/effects';
import AuthActionTypes from './types';
import { push } from 'connected-react-router';
import {
    loginSuccessSuccess,
    loginFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure,
    loginSuccess
} from './actions';
export function* login({payload: {email, password}}){
    try {
        const response = yield fetch(`http://127.0.0.1:8000/api/login`,{
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email,
                password,
            })
          })
          const result = yield response.json()
          yield put(loginSuccess(result.success))
          yield put(push('/admin/dashboard'));  
    } catch (err) {
        yield put(loginFailure(err))
    }
}
export function* signOut(){
    try {
        yield put(signOutSuccess())
        yield put(push('/admin/login'));
    } catch (err) {
        yield put(signUpFailure())
    }
}
export function* signUp({ payload : {name, email, password, confirmPassword, phone, IDNumber, role_id} }) {
    try {
        const response = yield fetch(`http://127.0.0.1:8000/api/signup`,{
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
        yield put(signUpSuccess(result.success))
        yield put(push('/admin/dashboard'));  
    } catch(err) {
        yield put(signUpFailure(err))
    }
}
export function* onLoginStart(){
    yield takeLatest(AuthActionTypes.LOGIN_START, login)
}
export function*  onSignUpStart(){
    yield takeLatest(AuthActionTypes.SIGN_UP_START, signUp)
}
export function* onSignOutStart(){
    yield takeLatest(AuthActionTypes.SIGN_OUT_START, signOut)
}
export function* authSagas(){
    yield all([
        call(onLoginStart),
        call(onSignUpStart),
        call(onSignOutStart)
    ])
}