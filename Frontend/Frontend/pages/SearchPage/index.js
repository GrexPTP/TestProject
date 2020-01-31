import React, {useState, useEffect} from 'react'
import {View, Text, Dimensions, FlatList, TouchableOpacity} from 'react-native'
import { Searchbar, List, Avatar } from 'react-native-paper';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProfilePage from '../ProfilePage'
import Constants from 'expo-constants';
import {useSelector, useDispatch} from 'react-redux'
import {getListStart} from '../../redux/reducer/manageReducer/actions'


const SearchPage = ({navigation}) => {
    const [query, setQuery] = useState('')
    const items = useSelector(state => state.manage.list)
    const [filter, setFilter] = useState([])
    const role = useSelector(state => state.auth.role)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getListStart(token, role == 'Admin' ? 2 : 3))
    } 
    , [])
    const makeRemoteRequest = () => {    
        const url = `https://randomuser.me/api/?&results=20`;
        fetch(url)      
          .then(res => res.json())      
          .then(res => { 
              setItems(res.results)       
              setFilter(res.results)  
              console.log(role)    
         })      
      };

      const Item = ({name, email, avatar, id}) => {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={() => GoToDetail(id)}>
                <List.Item
                    title={name}
                    description={email}
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
        id = {item.id}             
        name={item.name}  
        email={item.email}                           
        avatar={item.avartar ? item.avartar.slice(-1)[0] : 'https://bootdey.com/img/Content/avatar/avatar6.png'}   
        
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
        headerShown: false,
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