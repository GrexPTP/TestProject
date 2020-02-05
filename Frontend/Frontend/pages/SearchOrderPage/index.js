import React, {useState, useEffect} from 'react'
import {View, Text, Dimensions, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import { Searchbar, List, Avatar, FAB } from 'react-native-paper';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Constants from 'expo-constants';
import {useSelector, useDispatch} from 'react-redux'
import {getListStart, getIndividualStart} from '../../redux/reducer/manageReducer/actions'
import OrderPage from '../OrderPage';


const SearchOrderPage = ({navigation}) => {
    const [query, setQuery] = useState('')
    const filter = useSelector(state => state.manage.list)
    const [items, setItems] = useState([])
    const role = useSelector(state => state.auth.role)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const route = navigation.dangerouslyGetParent().getParam('name')
    useEffect(() => {
      dispatch(getListStart(token, route == 'Employees' ? 2 : 3))
      navigation.addListener('didFocus', () => {
        dispatch(getListStart(token, route == 'Employees' ? 2 : 3))
      });
      console.log(filter)
    }, [])

      const Item = ({name, email, avatar, id, navigation}) => {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={() => {
                  dispatch(getIndividualStart(token, id, navigation))
                  }}>
                <List.Item
                    title={name}
                    description={email}
                    left={() =><Avatar.Image size={42} source={{uri:  avatar}}/>}
                > 
                </List.Item>
                <View
      style={{
        backgroundColor: 'grey',
        height: 0.5,
      }}
    />
                </TouchableOpacity>

            </View>
        )
    }

    const fillQuery = (query) => {
        const newData = filter.filter(item => {      
            const itemData = `${item.name.toUpperCase()} `;
             const textData = query.toUpperCase(); 
             return itemData.indexOf(textData) > -1 && query ;    
          });
          console.log(filter)
          setItems(newData) 
        setQuery(query)
    }
    return(
        <View style={{ flex: 1,
            flexDirection: 'column', paddingTop: Constants.statusBarHeight }}>
            <Searchbar
            style={{marginBottom: 5}}
        placeholder="Type a bill id to search"
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
        navigation={navigation}
       />          
     )}          
     keyExtractor={item => item.email}  
                               
  />          
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => {
      navigation.navigate('Create')
      console.log('press')
    }}
  />
        </View>
    )
}

const AppNavigator =  createStackNavigator({
    Orders: {
      screen: SearchOrderPage,
      navigationOptions: {
        headerShown: false,
      },
    },
    Create: {
      screen: OrderPage
    },
    Detail: {
      screen: OrderPage
    },
    
  },{
          initialRouteName: "Orders",
          headerMode: 'none'
  });
  const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: '#600EE6'
    },
  })
export default createAppContainer(AppNavigator)