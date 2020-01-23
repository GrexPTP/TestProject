import {createStore, applyMiddleware, compose} from "redux";
import logger from 'redux-logger'
import {persistStore} from "redux-persist";
import rootReducer, {persistConfig} from './reducer'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import rootSaga from "./root-saga";
import {persistReducer} from "redux-persist";
export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}
export const store = createStore(persistReducer(persistConfig,rootReducer(history)) , compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);