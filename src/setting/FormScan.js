import React, { Component }  from 'react';
import { StyleSheet, Text, View ,Image ,TextInput,TouchableOpacity  ,Alert , BackHandler} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import firebase from 'firebase';
import Expo, { Constants, BarCodeScanner, Permissions } from 'expo';

import ActionButton from 'react-native-action-button';

export default  class FormScan extends Component<{}> {
   constructor(props){
    super(props)
    this.state = {
      username: '', 
      password: '',
      hasCameraPermission: null,
      viewBardcode:false,
    }
   
  }

componentWillMount(){}
componentDidMount(){ 
   Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT); 
   BackHandler.addEventListener('hardwareBackPress', () =>  this.setState({  viewBardcode: true, })  );
  this._requestCameraPermission(); 
}

_backDAsbordSetting(){
  this.setState({  viewBardcode: false, }) ;
}
  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };
  _hendleViewBardcode(){
    this.setState({  viewBardcode: true, });   
  }

_submit(){  
 	 this.loadingButton.showLoading(true);
 	   setTimeout(() => {
         this.loadingButton.showLoading(false);   
          Actions.DasbordSetting();  
	      }, 2000);
 	  	
  }
   _handleBarCodeRead = data => {
    const ce = JSON.stringify(data);    
    const ceparse = JSON.parse(ce);
      this.setState({  viewBardcode: false, username: ceparse.data});
   };
  render() {
    return (      
      <View style={styles.container}> 
          {
                      this.state.viewBardcode === false  ?
                          <View>
                            <TextInput style={styles.inputBox}
                              underlineColorAndroid='rgba(0,0,0,0)'
                              onChangeText={username => this.setState({username})}
                              value={this.state.username}
                              placeholder="Input Barcode"
                              placeholderTextColor = "#ffffff"
                              ref={(input) => this.username = input }
                              onTouchStart={this._hendleViewBardcode.bind(this)}
                            />
                            <AnimateLoadingButton
                                ref={c => (this.loadingButton = c)}
                                width={300}
                                height={50}
                                title="Submit"
                                titleFontSize={16}
                                titleColor="rgb(255,255,255)"
                                backgroundColor="#00b5ec"
                                borderRadius={4}
                                onPress={this._submit.bind(this)}
                              /> 
                            </View>
                        : true
            }
            {
              this.state.viewBardcode === true ? 
                    <BarCodeScanner  onBarCodeRead={this._handleBarCodeRead}  
                      style={{ height: 200, width: 200 }}   
                    />
              : false
            }            
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems : 'center'
  },
  inputBox: {
    width : 300,
    height: 50,
    backgroundColor:'rgba(25,25,25,0.0)',
    borderRadius : 15,
    borderBottomWidth: 3,
    borderBottomColor:  '#000000',
    paddingHorizontal: 16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 40,
    width: 40,
    color: 'white',
  },
});



// <BarCodeScanner  onBarCodeRead={this._handleBarCodeRead}  
//                                 style={{ height: 200, width: 200 }}   
//                               />