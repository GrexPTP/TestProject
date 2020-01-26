import {all, call} from 'redux-saga/effects'
import {authSagas} from "./reducer/authReducer/sagas";
import {userSagas} from "./reducer/userReducer/sagas";
import {manageSagas} from "./reducer/manageReducer/sagas";
export default function* rootSaga () {
    yield all([call(authSagas), call(userSagas), call(manageSagas)]);
}