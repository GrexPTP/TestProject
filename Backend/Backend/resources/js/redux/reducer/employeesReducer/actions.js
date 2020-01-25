import EmployeesActionTypes from './types'
export const getEmployeesStart = token => ({
    type: EmployeesActionTypes.GET_EMPLOYEES_START,
    payload: token
})
export const getEmployeesSuccess = employees =>({
    type: EmployeesActionTypes.GET_EMPLOYEES_SUCCESS,
    payload: employees
})
export const getEmployeesFailure = error => ({
    type: EmployeesActionTypes.GET_EMPLOYEES_FAILURE,
    payload: error
})
export const getEmployeeStart = (token, id) => ({
    type: EmployeesActionTypes.GET_EMPLOYEE_START,
    payload: {
        token,
        id
    }
})
export const getEmployeeSuccess = employee =>({
    type: EmployeesActionTypes.GET_EMPLOYEE_SUCCESS,
    payload: employee
})
export const getEmployeeFailure = error => ({
    type: EmployeesActionTypes.GET_EMPLOYEE_FAILURE,
    payload: error
})