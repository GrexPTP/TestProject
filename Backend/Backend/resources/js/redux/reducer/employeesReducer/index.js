import EmployeesActionTypes from "./types"
const INITIAL_STATE = {
    employees: [],
    employee: null,
    error: null
}
const employeesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EmployeesActionTypes.GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.payload
            }
        case EmployeesActionTypes.GET_EMPLOYEES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case EmployeesActionTypes.GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employee: action.payload
            }
        case EmployeesActionTypes.GET_EMPLOYEE_FAILURE:
            return {
                ...state,
                error:  action.payload
            }
        default:
            return state
    }
}
export default employeesReducer