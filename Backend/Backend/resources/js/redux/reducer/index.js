import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import storage from 'redux-persist/lib/storage'
import authReducer from './authReducer'
import userReducer from './userReducer'
import manageReducer from './manageReducer'
export const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    user: userReducer,
    manage: manageReducer
});
export default rootReducer
