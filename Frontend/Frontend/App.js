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
import ProfilePage from  './pages/ProfilePage'
const AuthRouter = createStackNavigator(
  {
    SignUpSignInPage,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
  },{
    headerMode: 'none'
  }
);
const UserRouter = createStackNavigator({
  ProfilePage
},{
  headerMode: 'none'
})
const EmployeeRouter = createStackNavigator({
  HomePage
},{
  headerMode: 'none'
})
const AdminRouter = createStackNavigator({
  HomePage
},{
  headerMode: 'none'
})
const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingPage,
    User: UserRouter,
    Auth: AuthRouter,
    Employee: EmployeeRouter
  },
  {
    initialRouteName: 'AuthLoading',
    
    
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