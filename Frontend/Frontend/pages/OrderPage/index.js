
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {connect} from 'react-redux'
import {createOrderStart, updateOrderStart} from '../../redux/reducer/orderReducer/actions'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Button, Provider, Portal, Modal, TextInput, FAB} from 'react-native-paper'
let productsList = [{name: '', price: '', quantity: ''}]
const Item = ({index,initName,initPrice,initQuantity, disabled}) => {
  const [name, setName] = useState(initName)
  const [price, setPrice] = useState(initPrice)
  const [quantity, setQuantity] = useState(initQuantity)
  return(
    <View>
      <TextInput disabled={disabled} label='Product Name' mode='outlined' value={name} onChange={e => {
        setName(e.nativeEvent.text)
        productsList[index]['name'] = name
      }} />
              <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
              <TextInput keyboardType="numeric"  disabled={disabled} style={{width: '49%', marginRight:2}} label='Price' mode='outlined' value={price} onChange={e => {
                productsList[index]['price'] = e.nativeEvent.text
                setPrice(e.nativeEvent.text)
              }} />
              <TextInput keyboardType="numeric" disabled={disabled} style={{width: '49%', marginLeft:2}} label='Quantity' mode='outlined' value={quantity} onChange={e => {
                  productsList[index]['quantity'] = e.nativeEvent.text
                  setQuantity(e.nativeEvent.text)
              } } />
      </View>
    </View>
    
  )
}
class OrderPage extends Component {
  constructor(props){
    super(props)
    this.ocr = this.ocr.bind(this)
  }
  state = {
    images: JSON.parse(this.props.navigation.state.routeName == 'Create' ? '[]' : (this.props.order.images ? this.props.order.images : '[]' )),
    buttonType: 'profile',
    cameraVisible: false,
    email: this.props.navigation.state.routeName == 'Create' ? '' :this.props.order.email,
    name: this.props.navigation.state.routeName == 'Create' ? '' :this.props.order.name,
    phone: this.props.navigation.state.routeName == 'Create' ? '' :this.props.order.phone,
    address: this.props.navigation.state.routeName == 'Create' ? '' :this.props.order.address,
    IDNumber: this.props.navigation.state.routeName == 'Create' ? '' :this.props.order.id_number,
    items : this.props.navigation.state.routeName == 'Create' ? [{name: '', price: '', quantity: ''}] : JSON.parse(this.props.order.data),
    display: null,
    preDisplay: null,
  };
  componentDidMount() {
    productsList = this.state.items
    this.getPermissionAsync();
    this.setState({
    display:  this.state.images.slice(-1)[0] ? `http://tkb.miennam24h.vn${this.state.images.slice(-1)[0]}` : 'https://www.seekpng.com/png/detail/114-1146907_order-delivery-icon-delivery-order-png.png',
    preDisplay: this.state.images.slice(-1)[0] ? `http://tkb.miennam24h.vn${this.state.images.slice(-1)[0]}` : 'https://www.seekpng.com/png/detail/114-1146907_order-delivery-icon-delivery-order-png.png' 
  })
     
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  ocr()  {
    const obj = this
    fetch('http://tkb.miennam24h.vn/api/ocr',{
      method: 'post',headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
      body: JSON.stringify({
        image: this.state.preDisplay
      })
    }).then(response => response.json()).then(result => {
      console.log(result.success)
      const {address, email, id, name, phone} = result.success
      console.log(address, email)
      obj.setState({
        address: address,email: email,name: name,phone: phone,IDNumber:id
      })
    })
    
  }
  _update = (token, data) => {
    if (this.props.navigation.state.routeName == 'Create') {
      this.props.createOrder(token,data)
    } 
    else {
      this.props.updateOrder(token, data)
    }
  }
  _pickImage = async (type) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      quality: 1
    });
    if (!result.cancelled) {
        this.setState({ images: [...this.state.images,`data:image/jpeg;name=av.jpg;base64,${result.base64}`], display: result.uri, preDisplay: `data:image/jpeg;name=av.jpg;base64,${result.base64}`});
    }
  };

  _takeImage = async (type) => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        base64: true,
        quality: 1
      })
      if (!result.cancelled) {
        this.setState({ images: [...this.state.images,`data:image/jpeg;name=av.jpg;base64,${result.base64}`], display: result.uri, preDisplay: `data:image/jpeg;name=av.jpg;base64,${result.base64}` });
    }
  }
_modalOpen = () => {
  this.setState({cameraVisible: true})
}
_modalClose = () => {
  this.setState({cameraVisible: false})
}

  render() {

    let { cameraVisible, buttonType, images, email, name, address, IDNumber, phone, display, items } = this.state;
    const {navigation, token} = this.props
    const currentRoute = navigation.state.routeName
    const id = navigation.getParam('id')
    const role = this.props.role
    return (
      <Provider>
        <Portal>
        <Modal visible={cameraVisible} >
          <View style={{justifyContent:'center',alignItems: 'center', marginTop:200}}>
          <Button mode='text'
          style={styles.cameraButton}
        color='white'
          onPress={() => this._pickImage(buttonType)}
        >
          Pick an image from camera roll
        </Button>
        <Button mode='text'
        style={styles.cameraButton}
        color='white'
          onPress={() => this._takeImage(buttonType)}
        >
          Take Picture
        </Button>
        <Button mode='text'
        style={styles.cameraButton}
        color='white'
          onPress={() => this._modalClose()}
        >
          Cancel
        </Button>
          </View>
        
        </Modal>
      
      </Portal>
      <View style={styles.container}>
        
          <View>
            
            <View style={styles.bodyContent}>
            
              <ScrollView style={{minHeight: Dimensions.get('window').height * (5/6), width:'100%'}}>
              <Text style={styles.name}>{`Order`}</Text>
              <TextInput label='Email' mode='outlined' value={email} onChange={ e => this.setState({email: e.nativeEvent.text})} disabled={role === 'User'}/>
              <TextInput label='Full Name' mode='outlined' value={name} onChange={ e => this.setState({name : e.nativeEvent.text})} disabled={role === 'User'}/>
              <TextInput keyboardType="number-pad" label='Phone' mode='outlined' value={phone} onChange={ e => this.setState({phone : e.nativeEvent.text} )} disabled={role === 'User'}/>
              <TextInput label='Address' mode='outlined' multiline  numberOfLines={5.0} value={address} onChange={ e => this.setState({address : e.nativeEvent.text})} disabled={role === 'User'}/>
              <TextInput keyboardType="number-pad" label='ID Number' mode='outlined' value={IDNumber} onChange={ e => this.setState({IDNumber : e.nativeEvent.text})} disabled={role === 'User'}/>
              <Text style={styles.name}>{`Order Details`}</Text>
              {this.state.items.map((item, index) => {
                return <Item disabled={role == 'User'} key={index} index={index} initName={item.name} initPrice={item.price} initQuantity={item.quantity} />
              })}
              <View style={{flex:1, flexDirection:'column', justifyContent:'space-around', padding:5}}>
                <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
                <Text style={{color: 'grey', marginBottom:5}}>Upload the picture of the bill</Text>
                <TouchableOpacity disabled={role == 'User'} style={{height:250, width:'100%'}} onPress={() => {
            this.setState({buttonType:'back'})
            this._modalOpen()
          }}>
                  <Image resizeMode='center' style={{height:250, width:'100%'}} source={{uri: display ? display : 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                </TouchableOpacity>
                </View>
                
              </View>
              <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
              {role !== 'User' && <Button style={{marginBottom: 5}} mode="outlined" onPress={() => this.ocr()}>Use Data From Photo</Button>} 
              {role !== 'User' && <Button style={{marginBottom: 5}} mode="outlined" onPress={() => this._update(token, {id, email, name, phone, address, id_number:IDNumber, productsList, images})}>{this.props.navigation.state.routeName == 'Create' ? 'Create' : 'Update'}</Button>}
                <Button mode="outlined" onPress={() => navigation.goBack()}>{'Return'}</Button>
              </View> 
              
              </ScrollView>
              {role !== 'User' &&  <FAB 
    style={styles.fabPlus}
    small
    icon="plus"
    onPress={() => {
      productsList.push({name: '', price: '', quantity: ''})
      this.setState({items: productsList})
    }}
  /> }
             {role !== 'User' &&
             <FAB
             disabled= {items.length < 2}
               style={styles.fabMinus}
               small
               icon="minus"
               onPress={() => {
                 productsList.pop()
                 this.setState({items: productsList})
               }}
             /> } 
  
            </View>
        </View>
      </View>
      </Provider>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.user.user,
  token: state.auth.token,
  individual: state.manage.individual,
  role: state.auth.role,
  order: state.order.order
})
const mapDispatchToProps = dispatch => ({
    createOrder: (token, data) => {
      dispatch(createOrderStart(token, data))
    },
    updateOrder: (token, data) => {
      dispatch(updateOrderStart(token, data))
    }
    
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)
const styles = StyleSheet.create({
  fabPlus: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: -30,
    backgroundColor: '#600EE6'
  },
  fabMinus: {
    position: 'absolute',
    margin: 16,
    right: 50,
    bottom: -30,
    backgroundColor: '#600EE6'
  },
  header:{
    backgroundColor: "#600EE6",
    height: Dimensions.get('window').height * (1/12),
  },
  avatarOption: {
    width: 49,
    height: 49,
    borderRadius: 65,
    borderColor: "white",
    alignSelf:'flex-end',
    position: 'absolute',
    right:10
  },
  avatar: {
    width: 49,
    height: 49,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: "white",
    alignSelf:'flex-end',
    position: 'absolute',
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:20
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
 
