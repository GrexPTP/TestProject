import {combineReducers} from "redux";
import { AsyncStorage } from 'react-native'
import authReducer from './authReducer'
import userReducer from './userReducer'
import manageReducer from './manageReducer'
export const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
};
const rootReducer = () => combineReducers({
    auth: authReducer,
    user: userReducer,
    manage: manageReducer
});
export default rootReducer
