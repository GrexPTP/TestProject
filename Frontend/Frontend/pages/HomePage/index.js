import React, {useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, AsyncStorage, Image, Dimensions} from 'react-native'
import {Card, Title, Paragraph, IconButton } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux'
import {getUserStart} from '../../redux/reducer/userReducer/actions'
import Carousel from 'react-native-snap-carousel'
import { LinearGradient } from 'expo-linear-gradient';
const videos = [
  {
    id: "WpIAc9by5iU",
    thumbnail: "https://images.unsplash.com/photo-1579648999496-65a8fa8d77ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    feature: "Fast",
    description: "Fast Delivery"
  }, {
    id: "sNPnbI1arSE",
    thumbnail: "https://images.unsplash.com/photo-1580218102234-490e83efd85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80",
    feature: "Cheap",
    description: "Cheap Service"
  }, {
    id: "VOgFZfRVaww",
    thumbnail: "https://images.unsplash.com/photo-1577186606264-8bc8d1fdf9e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    feature: "Secure",
    description: "Secure Data"
  }
]
const Item = (item, index) => {
  console.log(item.item.thumbnail)
  return(
   
          <TouchableOpacity  activeOpacity={0.8} onPress={() => {console.log('hi')}}>
                <Card style={{margin: 8, height: Dimensions.get('window').height * (2/5) , backgroundColor: '#600EE6', borderRadius: 20}} accessible={true}>
                {/* <LinearGradient
                colors={['#E040FB', 'transparent']}
              style={{  alignItems: 'center', borderRadius: 20, height: '100%' }}> */}
              <ImageBackground source={{ uri: item.item.thumbnail }} imageStyle={{ borderRadius: 20 }} style={{width: '100%', height: '100%'}}>
                    <Card.Content style={{alignItems: 'center', justifyContent: 'center', paddingTop: 50 }}>
            <Title style={{color: 'white'}}>{item.item.feature}</Title>
            <Paragraph style={{color: 'white'}}>{item.item.description}</Paragraph>
                </Card.Content>
                </ImageBackground>
                {/* </LinearGradient> */}
                </Card>
          </TouchableOpacity>
      
    
  )
}
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
            <Carousel
            loop={true}
          data={videos}
          renderItem={Item}
          sliderWidth={360}
          itemWidth={280}
          layout={'default'}
          firstItem={0}
        />
        
          <View style={{flexDirection:'row', height:Dimensions.get('window').height * (2/5) }}>
          <TouchableOpacity style={{width:'50%'}} activeOpacity={0.8} onPress={() => {navigation.navigate('Employees')}}>
          
                <Card style={{margin: 8, height:Dimensions.get('window').height * (2/5), backgroundColor: '#600EE6', borderRadius: 20}} accessible={true}>
                <LinearGradient
                colors={['#E040FB', 'transparent']}
              style={{  alignItems: 'center', borderRadius: 20, height: '100%' }}>
                    <Card.Content style={{alignItems: 'center', justifyContent: 'center', paddingTop: 50 }}>
                    <Title style={{color: 'white'}}>Employees</Title>
                    <IconButton
                    icon="account-tie"
                    size={30}
                    onPress={() => navigation.navigate('Employees')}/>
                </Card.Content>
                </LinearGradient>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'50%'}}  activeOpacity={0.8} onPress={() => {navigation.navigate('Users')}}>
                <Card style={{margin: 8, height:Dimensions.get('window').height * (2/5), backgroundColor: '#600EE6', borderRadius: 25}} accessible={true}>
                <LinearGradient
                colors={['#E040FB', 'transparent']}
              style={{  alignItems: 'center', borderRadius: 20, height: '100%' }}>
                    <Card.Content style={{alignItems: 'center', justifyContent: 'center', paddingTop: 50 }}>
                    <Title style={{color: 'white'}}>Users</Title>
                    <IconButton
                    icon="account"
                    size={30}
                    onPress={() => navigation.navigate('Employees')}/>
                </Card.Content>
                </LinearGradient>
                </Card>
                </TouchableOpacity>
          </View>

            {/* {role == 'Admin' && 
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
            } */}
            
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