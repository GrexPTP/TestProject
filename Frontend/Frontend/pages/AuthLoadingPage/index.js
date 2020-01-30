import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';
const AuthLoadingScreen = ({navigation}) => {
  const token = useSelector(state => state.auth.token)
  const role = useSelector(state => state.auth.role);
  useEffect(() => {
        bootstrapAsync()
  }, [])
  // Fetch the token from storage then navigate to our appropriate place
  const bootstrapAsync = () => {
    if (token) {
      navigation.navigate(role);
    } else {
      navigation.navigate('Auth');
    }
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    
  };

  // Render any loading content that you like here
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
}
export default AuthLoadingScreen