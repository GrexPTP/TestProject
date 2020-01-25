import { takeLatest, put, all, call } from 'redux-saga/effects';
import EmployeesActionTypes from './types'
import {getEmployeesSuccess, getEmployeesFailure, getEmployeeSuccess, getEmployeeFailure} from './actions'
export function* getEmployees({payload}){
    try {
        const response = yield fetch('http://127.0.0.1:8000/api/employees',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${payload}`
              }
        })
        const result = yield response.json()
        yield put(getEmployeesSuccess(result.success))
    } catch (error) {
        yield put(getEmployeesFailure(error))
    }    
}
export function* getEmployee({payload: {token, id}}){
    try {
        const response = yield fetch('http://127.0.0.1:8000/api/employee',{
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
        yield put(getEmployeeSuccess(result.success))
    } catch (error) {
        yield put(getEmployeeFailure(error))
    }    
}
export function* onGetEmployeesStart(){
    yield takeLatest(EmployeesActionTypes.GET_EMPLOYEES_START, getEmployees)
}
export function* onGetEmployeeStart(){
    yield takeLatest(EmployeesActionTypes.GET_EMPLOYEE_START, getEmployee)
}
export function* employeesSagas(){
    yield all([
        call(onGetEmployeesStart),
        call(onGetEmployeeStart)
    ])
}