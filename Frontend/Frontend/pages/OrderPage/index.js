
import React, { Component } from 'react';
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
import {signOutStart} from '../../redux/reducer/authReducer/actions'
import {updateProfileStart} from '../../redux/reducer/userReducer/actions'
import {updateIndividualStart} from '../../redux/reducer/manageReducer/actions'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Button, Provider, Portal, Modal, TextInput} from 'react-native-paper'


class OrderPage extends Component {
  state = {
    avaPictures: JSON.parse(this.props.navigation.state.routeName == 'Detail' ? (this.props.individual.avartar ? this.props.individual.avartar : '[]') :(this.props.currentUser.avartar ? this.props.currentUser.avartar : '[]')),
    frontPictures: JSON.parse(this.props.navigation.state.routeName == 'Detail' ? (this.props.individual.front_id ? this.props.individual.front_id : '[]') :(this.props.currentUser.front_id ? this.props.currentUser.front_id : '[]')),
    backPictures: JSON.parse(this.props.navigation.state.routeName == 'Detail' ? (this.props.individual.back_id ? this.props.individual.back_id : '[]') :(this.props.currentUser.back_id ? this.props.currentUser.back_id : '[]')),
    buttonType: 'profile',
    cameraVisible: false,
    email: this.props.navigation.state.routeName == 'Detail' ? this.props.individual.email :this.props.currentUser.email,
    password: '',
    confirmPassword: '',
    name: this.props.navigation.state.routeName == 'Detail' ? this.props.individual.name :this.props.currentUser.name,
    phone: this.props.navigation.state.routeName == 'Detail' ? this.props.individual.phone :this.props.currentUser.phone,
    address: this.props.navigation.state.routeName == 'Detail' ? this.props.individual.address :this.props.currentUser.address,
    IDNumber: this.props.navigation.state.routeName == 'Detail' ? this.props.individual.id_number :this.props.currentUser.id_number,
    
    displayAva: null,
    displayFront: null,
    displayBack: null
  };
  componentDidMount() {
    this.getPermissionAsync();
    this.setState({displayAva: this.state.avaPictures.slice(-1)[0] ? `http://tkb.miennam24h.vn${this.state.avaPictures.slice(-1)[0]}` : 'https://bootdey.com/img/Content/avatar/avatar6.png',
    displayFront: this.state.frontPictures.slice(-1)[0] ? `http://tkb.miennam24h.vn${this.state.frontPictures.slice(-1)[0]}` : 'https://bootdey.com/img/Content/avatar/avatar6.png',
    displayBack:  this.state.backPictures.slice(-1)[0] ? `http://tkb.miennam24h.vn${this.state.backPictures.slice(-1)[0]}` : 'https://bootdey.com/img/Content/avatar/avatar6.png' })
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  _update = (token,data) => {
    if (this.props.navigation.state.routeName == 'Detail') {
      this.props.updateIndividual(token, data)
    } else {
      this.props.updateProfile(token, data)
    }
    
  }
  _pickImage = async (type) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    
    if (!result.cancelled) {
      if(type == 'profile') {
        this.setState({ avaPictures: [...this.state.avaPictures,`data:image/jpeg;name=av.jpg;base64,${result.base64}`], displayAva: result.uri });
      } else if (type == 'front') {
        this.setState({ frontPictures: [...this.state.frontPictures,`data:image/jpeg;name=av.jpg;base64,${result.base64}`], displayFront: result.uri });
      } else {
        this.setState({ backPictures: [...this.state.backPictures,`data:image/jpeg;name=av.jpg;base64,${result.base64}`], displayBack: result.uri });
      }
      
    }
  };

  _takeImage = async (type) => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        base64: true,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })
      if (!result.cancelled) {
        if(type == 'profile') {
          this.setState({ avaPictures: [...this.state.avaPictures,`data:image/jpeg;name=bla.jpg;base64,${result.base64}`], displayAva: result.uri });
        } else if (type == 'front') {
          this.setState({ frontPictures: [...this.state.frontPictures,`data:image/jpeg;name=bla.jpg;base64,${result.base64}`], displayFront: result.uri });
        } else {
          this.setState({ backPictures: [...this.state.backPictures,`data:image/jpeg;name=bla.jpg;base64,${result.base64}`], displayBack: result.uri });
        }
        
      }
  }
_modalOpen = () => {
  this.setState({cameraVisible: true})
}
_modalClose = () => {
  this.setState({cameraVisible: false})
}

  render() {

    let { avaPictures, cameraVisible, buttonType ,frontPictures, backPictures, email, name, address, IDNumber, password, confirmPassword, phone, displayAva, displayFront, displayBack } = this.state;
    const {navigation, token} = this.props
    const currentRoute = navigation.state.routeName
    console.log(currentRoute)
    const id = navigation.getParam('id')
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
          <View style={styles.header}></View>
          <TouchableOpacity style={styles.avatarOption} onPress={() => {
            this.setState({buttonType:'profile'})
            this._modalOpen()
          }}>
          <Image style={styles.avatar} source={{uri: displayAva ? displayAva : 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          </TouchableOpacity>
          <View>
            <View style={styles.bodyContent}>
            
              <ScrollView style={{minHeight: Dimensions.get('window').height * (3/4), width:'100%'}}>
              <Text style={styles.name}>{`Profile`}</Text>
              <TextInput label='Email' mode='outlined' value={email} onChange={ e => this.setState({email: e.nativeEvent.text})} disabled={true}/>
              <TextInput label='Password' mode='outlined' secureTextEntry/>
              <TextInput label='Full Name' mode='outlined' value={name} onChange={ e => this.setState({name : e.nativeEvent.text})}/>
              <TextInput label='Phone' mode='outlined' value={phone} onChange={ e => this.setState({phone : e.nativeEvent.text} )}/>
              <TextInput label='Address' mode='outlined' multiline  numberOfLines={5.0} value={address} onChange={ e => this.setState({address : e.nativeEvent.text})}/>
              <TextInput label='ID Number' mode='outlined' value={IDNumber} onChange={ e => this.setState({IDNumber : e.nativeEvent.text})}/>
              <View style={{flex:1, flexDirection:'column', justifyContent:'space-around', padding:5}}>
                <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
                <Text style={{color: 'grey',marginBottom:5}}>Front ID (Press to choose a picure)</Text>
                <TouchableOpacity style={{height:250, width:400}} onPress={() => {
            this.setState({buttonType:'front'})
            this._modalOpen()
          }}>
                  <Image style={{height:250, width:400}} source={{uri: displayFront ? displayFront : 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                </TouchableOpacity>
                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
                <Text style={{color: 'grey', marginBottom:5}}>Back ID (Press to choose a picure)</Text>
                <TouchableOpacity style={{height:250, width:400}} onPress={() => {
            this.setState({buttonType:'back'})
            this._modalOpen()
          }}>
                  <Image style={{height:250, width:400}} source={{uri: displayBack ? displayBack : 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                </TouchableOpacity>
                </View>
                
              </View>
              <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
                
                <Button style={{marginBottom: 5}} mode="outlined" onPress={() => this._update(token,{id,email,password,confirmPassword,name,phone,address,IDNumber,avaPictures,frontPictures, backPictures})}>Update</Button>
                <Button mode="outlined" onPress={() => currentRoute === 'Profile' ? this.props.signOut(this.props.navigation) : navigation.goBack()}>{currentRoute === 'Profile' ? 'Sign Out' : 'Return'}</Button>
              </View> 
              </ScrollView>
       
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
  role: state.auth.role
})
const mapDispatchToProps = dispatch => ({
    signOut: (navigation) => {
      dispatch(signOutStart())
      navigation.navigate('Auth')
    },
    updateProfile: (token, data) => {
      dispatch(updateProfileStart(token, data))
    },
    updateIndividual: (token,data) => {
      dispatch(updateIndividualStart(token, data))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)
const styles = StyleSheet.create({
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
 
