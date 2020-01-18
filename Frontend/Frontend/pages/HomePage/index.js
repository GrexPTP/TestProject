import React from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import { Button } from 'react-native-paper';
import {useDispatch} from 'react-redux'
import {signOutSuccess} from '../../redux/reducers/AuthReducer/actions'
import Constants from 'expo-constants';
const HomePage = ({navigation}) => {
    const dispatch = useDispatch()
   const signOutAsync = async () => {
        dispatch(signOutSuccess())
        navigation.navigate('Auth');
      };
    return (
        <View style={{flex:1, paddingTop:Constants.statusBarHeight}}>
            <Button onPress={() => signOutAsync()}>Sign Out</Button>
        </View>
    )
}
export default HomePage