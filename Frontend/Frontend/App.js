import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import SignUpSignInPage from './pages/SignUpSignInPage'
import AuthLoadingPage from './pages/AuthLoadingPage'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store'
const AuthRouter = createStackNavigator(
  {
    SignUpSignInPage,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
  }
);
const AppRouter = createStackNavigator({
  HomePage
})
const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingPage,
    App: AppRouter,
    Auth: AuthRouter
  },
  {
    initialRouteName: 'AuthLoading'
  }
))
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer/>
      </PersistGate>
    </Provider>
  )
}

export default App