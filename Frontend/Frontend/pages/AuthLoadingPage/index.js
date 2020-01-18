import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';

const AuthLoadingScreen = ({navigation}) => {
  useEffect(() => {
        bootstrapAsync()
  }, [])
  // Fetch the token from storage then navigate to our appropriate place
  const bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate(userToken ? 'User' : 'Auth');
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