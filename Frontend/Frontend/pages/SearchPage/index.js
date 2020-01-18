import React, {useState, useEffect} from 'react'
import {View, Text, Dimensions, FlatList, TouchableOpacity} from 'react-native'
import { Searchbar, List, Avatar } from 'react-native-paper';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProfilePage from '../ProfilePage'
import Constants from 'expo-constants';


const SearchPage = ({navigation}) => {
    const [query, setQuery] = useState('')
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState([])
    useEffect(() => makeRemoteRequest()
    , [])
    const makeRemoteRequest = () => {    
        const url = `https://randomuser.me/api/?&results=20`;
        fetch(url)      
          .then(res => res.json())      
          .then(res => { 
              setItems(res.results)       
              setFilter(res.results)      
         })      
      };

      const Item = ({title,subtitle, avatar}) => {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={() => GoToDetail(1)}>
                <List.Item
                    title={title}
                    description={subtitle}
                    left={() =><Avatar.Image size={42} source={{uri:  avatar}}/>}
                > 
                
                </List.Item>
                </TouchableOpacity>
            </View>
        )
    }
    const GoToDetail = (id) => {
        navigation.navigate('Detail',{
            id
        })
    }
    
    const fillQuery = (query) => {
        console.log(filter)
        const newData = filter.filter(item => {      
            const itemData = `${item.name.title.toUpperCase()}   
            ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
            
             const textData = query.toUpperCase();
              
             return itemData.indexOf(textData) > -1;    
          });
          setItems(newData) 


        setQuery(query)
        
    }
    return(
        <View style={{ flex: 1,
            flexDirection: 'column', paddingTop: Constants.statusBarHeight }}>
            <Searchbar
            style={{marginBottom: 5}}
        placeholder="Search"
        onChangeText={query => fillQuery(query) }
        value={query}
      />
        <FlatList          
    data={items}          
    renderItem={({ item }) => ( 
      <Item              
        title={`${item.name.first} ${item.name.last}`}  
        subtitle={item.email}                           
        avatar={item.picture.thumbnail}   
        
       />          
     )}          
     keyExtractor={item => item.email}  
                               
  />          
        </View>
    )
}

const AppNavigator = createStackNavigator({
    Users: {
      screen: SearchPage,
      navigationOptions: {
        header: null,
      },
    },
    Detail: {
      screen: ProfilePage
    }
  },{
          initialRouteName: "Users",
          headerMode: 'none'
  });
export default createAppContainer(AppNavigator)