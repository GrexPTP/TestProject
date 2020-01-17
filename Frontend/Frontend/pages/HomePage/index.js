import React from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import { Button } from 'react-native-paper';

const HomePage = ({navigation}) => {
   const signOutAsync = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
      };
    return (
        <View style={{flex:1}}>
            <Button onPress={() => signOutAsync()}>Sign Out</Button>
        </View>
    )
}
export default HomePage