import {createSelector} from 'reselect';
const selectAuth = state => state.auth;

export const selectToken = createSelector(
    [selectAuth],
    (auth) => auth.token
);