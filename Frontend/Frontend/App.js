import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'

const AuthenRouter = createStackNavigator(
  {
    SignUpSignInPage,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    HomePage 
  },
  {
    initialRouteName: 'SignUpSignInPage',
    headerMode: 'none',
  }
);
const AppContainer = createAppContainer(AuthenRouter)
const App = () => {
  return (
    <View style={{flex: 1}}>
        <AppContainer/>
    </View>
  )
}

export default App