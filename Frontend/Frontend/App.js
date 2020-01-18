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
import {Ionicons} from '@expo/vector-icons';





const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  let IconComponent = Ionicons;
  if (routeName === 'Home') {
    iconName = `ios-home`;
  } else if (routeName === 'Events' ) {
    iconName = `ios-list`;
  } else if (routeName === 'Profile' ) {
    iconName = `ios-person`;
  } else if (routeName === 'MyEvents') {
    iconName = `ios-filing`;
  } else {
    iconName = `ios-map`
  }
  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};
const UserRouter = createBottomTabNavigator({
  Home: {
    screen: HomePage
  },
  Profile: {
      screen: ProfilePage
  }
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },
});
const EmployeeRouter = createBottomTabNavigator({
  Home: {
    screen: HomePage
  },
  Profile: {
      screen: ProfilePage
  }
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },
});
const AdminRouter = createBottomTabNavigator({
  Home: {
    screen: HomePage
  },
  Profile: {
      screen: ProfilePage
  }
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },
});
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