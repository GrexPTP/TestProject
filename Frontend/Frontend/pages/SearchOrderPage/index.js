import React, {useState, useEffect} from 'react'
import {View, Text, Dimensions, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import { Searchbar, List, Avatar, FAB } from 'react-native-paper';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Constants from 'expo-constants';
import {useSelector, useDispatch} from 'react-redux'
import {getOrdersStart, getOrderStart} from '../../redux/reducer/orderReducer/actions'
import OrderPage from '../OrderPage';


const SearchOrderPage = ({navigation}) => {
    const [query, setQuery] = useState('')
    const filter = useSelector(state => state.order.orders)
    const [items, setItems] = useState([])
    const role = useSelector(state => state.auth.role)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const route = navigation.dangerouslyGetParent().getParam('name')
    useEffect(() => {
      dispatch(getOrdersStart(token))
      console.log(filter)
    }, [])

      const Item = ({name, email, avatar, id, navigation}) => {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={() => {
                  dispatch(getOrderStart(token, id, navigation))
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
      console.log(`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa${JSON.stringify(filter)}`)
        const newData = filter.filter(item => {      
            const itemData = `${item.id} `;
             const textData = query; 
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
        name={item.id}  
        email={item.email}                           
        avatar={'https://bootdey.com/img/Content/avatar/avatar6.png'}   
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