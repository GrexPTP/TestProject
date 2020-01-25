import {createSelector} from 'reselect';
const selectEmployee = state => state.employees;

export const selectEmployees = createSelector(
    [selectEmployee],
    (employees) => employees.employees
);
export const selectCurrentEmployees = createSelector(
    [selectEmployee],
    (employees) => employees.employee
);