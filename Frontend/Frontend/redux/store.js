import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import logger from 'redux-logger'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  AsyncStorage,
}
const middlewares = [];
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares))
  let persistor = persistStore(store)
  return { store, persistor }
}