import React, { Component }  from 'react';
import { StyleSheet, Text, View ,Image ,TextInput,TouchableOpacity  ,Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import firebase from 'firebase';
import Expo, { Permissions, Notifications } from 'expo';

export default  class FormSignup extends Component<{}> {
   constructor(props){
    super(props)
    this.state = {
      username: '', 
      password: '',
    }
   
  }

componentWillMount(){}
componentDidMount(){ }

Signup(){  
 	 this.loadingButton.showLoading(true);
 	   setTimeout(() => {
         this.loadingButton.showLoading(false);   
          Actions.Login();  
	      }, 2000);
 	  	
  }
  render() {
    return (
      <View style={styles.container}> 
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText={username => this.setState({username})}
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              keyboardType="email-address"        
              onSubmitEditing={() => this.password.focus()}
              ref={(input) => this.username = input }
            />
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              onChangeText={password => this.setState({password})}
              secureTextEntry={true} 
              placeholderTextColor = "#ffffff"
              value = {this.state.password}
              ref={(input) => this.password = input } 
            />
          <AnimateLoadingButton
              ref={c => (this.loadingButton = c)}
              width={300}
              height={50}
              title="Signup"
              titleFontSize={16}
              titleColor="rgb(255,255,255)"
              backgroundColor="#00b5ec"
              borderRadius={4}
              onPress={this.Signup.bind(this)}
            /> 
           
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
});
