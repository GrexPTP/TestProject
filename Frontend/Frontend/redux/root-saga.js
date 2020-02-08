import {all, call} from 'redux-saga/effects'
import {authSagas} from "./reducer/authReducer/sagas";
import {userSagas} from "./reducer/userReducer/sagas";
import {manageSagas} from "./reducer/manageReducer/sagas";
import {orderSagas} from "./reducer/orderReducer/sagas";
export default function* rootSaga () {
    yield all([call(authSagas), call(userSagas), call(manageSagas), call(orderSagas)]);
}