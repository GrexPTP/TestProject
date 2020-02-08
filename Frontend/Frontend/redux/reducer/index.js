import {combineReducers} from "redux";
import { AsyncStorage } from 'react-native'
import authReducer from './authReducer'
import userReducer from './userReducer'
import manageReducer from './manageReducer'
import orderReducer from './orderReducer'
export const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    whitelist: [authReducer],
    blacklist: [userReducer, manageReducer, orderReducer]
};
const rootReducer = () => combineReducers({
    auth: authReducer,
    user: userReducer,
    manage: manageReducer,
    order: orderReducer
});
export default rootReducer
