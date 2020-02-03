import React, {useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native'
import { Button, Avatar,  Card, Title, Paragraph } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux'
import {getUserStart} from '../../redux/reducer/userReducer/actions'

const HomePage = ({navigation}) => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    let name = useSelector(state => state.user.user ? state.user.user.name : '')
    let role = useSelector(state => state.auth.role)
    useEffect(() => {
        dispatch(getUserStart(token))
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Title style={{color:'white', fontSize: 40, padding: 25, paddingBottom: 10}}>Welcome Back!</Title>
                <Title style={{color:'white', padding:30, paddingTop: 5,fontSize: 30}}>{name}</Title>
            </View>
            {role == 'Admin' && 
                <TouchableOpacity  activeOpacity={0.8} onPress={() => {navigation.navigate('Employees')}}>
                <Card style={{margin: 8, height: 175, backgroundColor: '#600EE6', borderRadius: 25}} accessible={true}>
                <ImageBackground source={{ uri: 'https://picsum.photos/700' }} imageStyle={{ borderRadius: 25 }} style={{width: '100%', height: '100%'}}>
                    <Card.Content style={{alignItems: 'center', justifyContent: 'center', paddingTop: 50 }}>
                    <Title style={{color: 'white'}}>Employees Manager</Title>
                    <Paragraph style={{color: 'white'}}>Press to go to employees manager</Paragraph>
                </Card.Content>
                </ImageBackground>
                </Card>
                </TouchableOpacity>
            }
            
            {(role == 'Employee' || role == 'Admin') &&
                <TouchableOpacity activeOpacity={0.8} onPress={() => {navigation.navigate('Users')}}>
                <Card style={{marginRight: 8, marginLeft: 8, height: 175, backgroundColor: '#600EE6', borderRadius: 25}} accessible={true}>
                <ImageBackground source={{ uri: 'https://picsum.photos/700' }} imageStyle={{ borderRadius: 25 }} style={{width: '100%', height: '100%'}}>
                    <Card.Content style={{alignItems: 'center', justifyContent: 'center', paddingTop: 50 }}>
                    <Title style={{color: 'white'}}>Users Manager</Title>
                    <Paragraph style={{color: 'white'}}>Press to go to users manager</Paragraph>
                </Card.Content>
                </ImageBackground>
                </Card>
                </TouchableOpacity>
            }
            
        </View>
    )
}
export default HomePage
const styles = StyleSheet.create({
    header:{
      backgroundColor: "#600EE6",
      height:150,
    },
    avatarOption: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      alignSelf:'center',
      position: 'absolute',
      marginTop:130,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      alignSelf:'center',
      position: 'absolute',
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width:100,
      borderRadius:30,
      backgroundColor: "#600EE6",
      marginRight: 10,
      marginLeft:10
    },
    cameraButton:{
      marginBottom: 10
    }
  });