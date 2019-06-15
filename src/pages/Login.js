import React, { Component }  from 'react';
import { StyleSheet, Text, View ,Image , TouchableOpacity,Button ,ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Expo, {  AdMobBanner , Constants ,AdMobInterstitial,  PublisherBanner,  AdMobRewarded } from 'expo';
import  Form from '@pages/Form';
import Logo from '@pages/Logo';


export default class Login extends Component<{}> {
  constructor(props){
    super(props);
  }
 
 componentDidMount() {  
   Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);    
  }
  signup(){
         Actions.Signup();     
  }
 render() {
    return (
   <ImageBackground   style={styles.container} >
       <Logo />
       <Form />       
       <View style={styles.signupInput}>
            <Text style={styles.signup}>
              Dont Have an account yet?
            </Text>
          <TouchableOpacity onPress={this.signup.bind(this)}> 
              <Text style={styles.signupbutton}>
                   Signup
              </Text>
          </TouchableOpacity>
       </View>
      </ImageBackground>
    );   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',   
    position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        resizeMode: 'cover'
  },
  blurImage:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        resizeMode: 'cover'
    },
  signupInput: {
     flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 16,
      flexDirection: 'row'
  },
  signup: {
    color: 'rgba(21,21,21,0.6)',
    fontSize: 16
  },
  signupbutton: {
      color:'#0D47A1',
      fontSize: 16,
      fontWeight: 'bold'
  }
});

