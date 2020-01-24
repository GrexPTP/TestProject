import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import storage from 'redux-persist/lib/storage'
import authReducer from './authReducer'
import userReducer from './userReducer'
export const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    user: userReducer
});
export default rootReducer
