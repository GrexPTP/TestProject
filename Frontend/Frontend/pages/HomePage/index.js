import React from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import { Button } from 'react-native-paper';
import {useDispatch} from 'react-redux'
import {signOutStart} from '../../redux/reducers/AuthReducer/actions'
const HomePage = ({navigation}) => {
    const dispatch = useDispatch()
   const signOutAsync = async () => {
        dispatch(signOutStart())
        navigation.navigate('Auth');
      };
    return (
        <View style={{flex:1}}>
            <Button onPress={() => signOutAsync()}>Sign Out</Button>
        </View>
    )
}
export default HomePage