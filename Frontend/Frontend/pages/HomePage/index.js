import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import { Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux'
import {getUserStart} from '../../redux/reducer/userReducer/actions'
import Constants from 'expo-constants';
const HomePage = ({navigation}) => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    useEffect(() => {
        dispatch(getUserStart(token))
    }, [])
    return (
        <View style={{flex:1, paddingTop:Constants.statusBarHeight}}>
            <Text>Home</Text>
        </View>
    )
}
export default HomePage