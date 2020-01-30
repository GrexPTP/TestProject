
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'
import {signOutStart} from '../../redux/reducer/authReducer/actions'
import {updateProfileStart} from '../../redux/reducer/userReducer/actions'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Button, Provider, Portal, Modal, TextInput} from 'react-native-paper'

class ProfilePage extends Component {
  state = {
    avaPictures: JSON.parse(this.props.currentUser.avartar ? this.props.currentUser.avartar : '[]' ),
    frontPictures: JSON.parse(this.props.currentUser.front_id ? this.props.currentUser.front_id : '[]' ),
    backPictures: JSON.parse(this.props.currentUser.back_id ? this.props.currentUser.back_id : '[]' ),
    buttonType: 'profile',
    cameraVisible: false,
    email: this.props.currentUser.email,
    password: '',
    confirmPassword: '',
    name: this.props.currentUser.name,
    phone: this.props.currentUser.phone,
    address: this.props.currentUser.address,
    IDNumber: this.props.currentUser.id_number,
    displayAva: null,
    displayFront: null,
    displayBack: null
  };
  componentDidMount() {
    this.getPermissionAsync();
    this.setState({displayAva: `http://192.168.0.105${this.state.avaPictures.slice(-1)[0]}`,
    displayFront: `http://192.168.0.105${this.state.frontPictures.slice(-1)[0]}`,
    displayBack: `http://192.168.0.105${this.state.backPictures.slice(-1)[0]}` })
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
    //console.log(token, data)
    this.props.updateProfile(token, data)
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
        this.setState({ avaPictures: [...this.state.avaPictures,`data:image/jpg;base64,${result.base64}`], displayAva: result.uri });
      } else if (type == 'front') {
        this.setState({ frontPictures: [...this.state.frontPictures,`data:image/jpg;base64,${result.base64}`], displayFront: result.uri });
      } else {
        this.setState({ backPictures: [...this.state.backPictures,`data:image/jpg;base64,${result.base64}`], displayBack: result.uri });
      }
      
    }
  };

  _takeImage = async (type) => {
    const {avaPictures, frontPictures, backPictures} = this.state
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        base64: true,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })
      if (!result.cancelled) {
        if(type == 'profile') {
          this.setState({ avaPictures: [...this.state.avaPictures,`data:image/jpg;base64,${result.base64}`], displayAva: result.uri });
        } else if (type == 'front') {
          this.setState({ frontPictures: [...this.state.frontPictures,`data:image/jpg;base64,${result.base64}`], displayFront: result.uri });
        } else {
          this.setState({ backPictures: [...this.state.backPictures,`data:image/jpg;base64,${result.base64}`], displayBack: result.uri });
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
    const avaPic = avaPictures.map((item, key) => {
      return `http://192.168.0.105${item}`
    })
    const frontPic = frontPictures.map((item, key) => {
      return `http://192.168.0.105${item}`
    })
    const backPic = backPictures.map((item, key) => {
      return `http://192.168.0.105${item}`
    })
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
          <View style={styles.body}>
            <View style={styles.bodyContent}>
        <Text style={styles.name}>{`Profile`}</Text>
              <ScrollView style={{minHeight:200, width:'100%'}}>
              <TextInput label='Email' mode='outlined' value={email} onChange={ e => this.setState({email: e.target.value})}/>
              <TextInput label='Password' mode='outlined' secureTextEntry/>
              <TextInput label='Full Name' mode='outlined' value={name} onChange={ e => this.setState({name : e.target.value})}/>
              <TextInput label='Phone' mode='outlined' value={phone} onChange={ e => this.setState({phone : e.target.value} )}/>
              <TextInput label='Address' mode='outlined' multiline  numberOfLines={5.0} value={address} onChange={ e => this.setState({address : e.target.value})}/>
              <TextInput label='ID Number' mode='outlined' value={IDNumber} onChange={ e => this.setState({IDNumber : e.target.value})}/>
              <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', padding:5}}>
                <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
                <Text>Front</Text>
                <TouchableOpacity style={{height:50, width:120}} onPress={() => {
            this.setState({buttonType:'front'})
            this._modalOpen()
          }}>
                  <Image style={{height:50, width:120}} source={{uri: displayFront ? displayFront : 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                </TouchableOpacity>
                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
                <Text>Back</Text>
                <TouchableOpacity style={{height:50, width:120}} onPress={() => {
            this.setState({buttonType:'back'})
            this._modalOpen()
          }}>
                  <Image style={{height:50, width:120}} source={{uri: displayBack ? displayBack : 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                </TouchableOpacity>
                </View>
                
              </View>
              </ScrollView>
              <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this._update(token,{email,password,confirmPassword,name,phone,address,IDNumber,avaPictures,frontPictures, backPictures})}>
                <Text style={{color:'white'}}>Update</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => currentRoute === 'Profile' ? this.props.signOut(this.props.navigation) : navigation.goBack()}>
        <Text style={{color:'white'}}>{currentRoute === 'Profile' ? 'Sign Out' : 'Return'}</Text>  
              </TouchableOpacity> 
              </View>        
            </View>
        </View>
      </View>
      </Provider>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.user.user,
  token: state.auth.token
})
const mapDispatchToProps = dispatch => ({
    signOut: (navigation) => {
      dispatch(signOutStart())
      navigation.navigate('Auth')
    },
    updateProfile: (token, data) => {
      dispatch(updateProfileStart(token, data))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#c128f6",
    height:200,
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
    backgroundColor: "#c128f6",
    marginRight: 10,
    marginLeft:10
  },
  cameraButton:{
    marginBottom: 10
  }
});
 
