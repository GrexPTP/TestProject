import {createSelector} from 'reselect';
const selectManage = state => state.manage;

export const selectList = createSelector(
    [selectManage],
    (manage) => manage.list
);
export const selectIndividual = createSelector(
    [selectManage],
    (manage) => manage.individual
);