
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {useDispatch} from 'react-redux'
import {signOutSuccess} from '../../redux/reducers/AuthReducer/actions'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Button, Provider, Portal, Modal, TextInput} from 'react-native-paper'

export default class ProfilePage extends Component {
  state = {
    image: null,
    front: null,
    back: null,
    buttonType: 'profile',
    cameraVisible: false
  };
   

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async (type) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      if(type == 'profile')
      this.setState({ image: result.uri });
      else if (type == 'front')
      this.setState({ front: result.uri });
      else 
      this.setState({ back: result.uri });
    }
  };

  _takeImage = async (type) => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })
      if (!result.cancelled) {
        if(type == 'profile')
      this.setState({ image: result.uri });
      else if (type == 'front')
      this.setState({ front: result.uri });
      else 
      this.setState({ back: result.uri });
      }
  }
_modalOpen = () => {
  this.setState({cameraVisible: true})
}
_modalClose = () => {
  this.setState({cameraVisible: false})
}

  render() {

    let { image, cameraVisible, buttonType ,front, back } = this.state;

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
          <Image style={styles.avatar} source={{uri: image ? image : 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          </TouchableOpacity>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
              <ScrollView style={{minHeight:200, width:'100%'}}>
              <TextInput label='Email' mode='outlined'/>
              <TextInput label='Password' mode='outlined' secureTextEntry/>
              <TextInput label='Full Name' mode='outlined'/>
              <TextInput label='Phone' mode='outlined'/>
              <TextInput label='Address' mode='outlined' multiline  numberOfLines={5.0}/>
              <TextInput label='ID Number' mode='outlined'/>
              <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', padding:5}}>
                <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
                <Text>Front</Text>
                <TouchableOpacity style={{height:50, width:120}} onPress={() => {
            this.setState({buttonType:'front'})
            this._modalOpen()
          }}>
                  <Image style={{height:50, width:120}} source={{uri: front ? front : 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                </TouchableOpacity>
                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
                <Text>Back</Text>
                <TouchableOpacity style={{height:50, width:120}} onPress={() => {
            this.setState({buttonType:'back'})
            this._modalOpen()
          }}>
                  <Image style={{height:50, width:120}} source={{uri: back ? back : 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                </TouchableOpacity>
                </View>
                
              </View>
              </ScrollView>
              <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color:'white'}}>Update</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color:'white'}}>Sign Out</Text>  
              </TouchableOpacity> 
              </View>        
            </View>
        </View>
      </View>
      </Provider>
    );
  }
}
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
 
