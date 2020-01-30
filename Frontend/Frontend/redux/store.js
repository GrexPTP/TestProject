import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'
import {persistStore} from "redux-persist";
import rootReducer, {persistConfig} from './reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./root-saga";
import {persistReducer} from "redux-persist";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}
export const store = createStore(persistReducer(persistConfig,rootReducer()), applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);