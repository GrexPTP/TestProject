import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import logger from 'redux-logger'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}
const middlewares = [logger];

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)
