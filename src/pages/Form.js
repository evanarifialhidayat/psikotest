import React, { Component }  from 'react';
import { StyleSheet, Text, View ,Image ,TextInput,TouchableOpacity  ,Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import firebase from 'firebase';
import Expo, { Permissions, Notifications } from 'expo';
  const config = {
		    apiKey: "AIzaSyCe0BMYxzTKRHgJAOeUQVuNjkekfg77Y5Y",
        authDomain: "reactnativepsikotes.firebaseapp.com",
        databaseURL: "https://reactnativepsikotes.firebaseio.com",
        projectId: "reactnativepsikotes",
        storageBucket: "reactnativepsikotes.appspot.com",
        messagingSenderId: "202887267265",
        appId: "1:202887267265:web:bf99b58ca2f74ef7"
		  };

export default  class Form extends Component<{}> {
   constructor(props){
    super(props)
    this.state = {
      username: '', 
      password: '',
    }
   
  }

componentWillMount(){
 	//  this.registerForPushNotificationsAsync();
}
  componentDidMount(){   
  	 // this.props.getDataLogin();
  	 //  this.props.cekData();      
    //   console.log('Hi from React Native mantap 14 = '+this.props.LIST_PRODUCT_PREORITAS_CEK_VALUE);   
  }
// 1e:4a:97:31:4f:ab:8e:42:78:7b:f5:76:a0:e3:94:fa:59:60:62:48
//1001487462436-ilocam5dabdra017f750ktfjm705il1h.apps.googleusercontent.com
async loginWithFacebook() { 
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2359863914339660',
           { permissions: ["public_profile", "email"] })
    if (type === 'success') {      
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              console.log((await response.json()).id);
             // Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
             Actions.Dasbord();
    }
  }
 async loginWithGoogle(){
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: "1001487462436-ilocam5dabdra017f750ktfjm705il1h.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })
      if (result.type === "success") {
        console.log(result.user.email)
         Actions.Dasbord();
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
} 

 async  registerForPushNotificationsAsync() {
		  const { status: existingStatus } = await Permissions.getAsync(
		    Permissions.NOTIFICATIONS
		  );
		  let finalStatus = existingStatus;
		  if (existingStatus !== 'granted') {
		    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		    finalStatus = status;
		  }
		  if (finalStatus !== 'granted') {
		    return;
		  }

		  let token = await Notifications.getExpoPushTokenAsync();
		  console.log(token);        
		//    firebase.initializeApp(config);
		//    var key = firebase.database().ref('/notifikasi').push().key
        //    firebase.database().ref('/notifikasi').child(key).set({ 
        //    	id: token ,
        //    	name: 'Evan'
        //    });
           let tocall = 'ExponentPushToken[AtAqKCNHBpV1V7jl4n97bB]';
          // Alert.alert(token);
           return fetch('[https://exp.host/--/api/v2/push/send]', {
			    body: JSON.stringify({
			      to: token,
			      title: 'Evan Ganteng',
			      body: 'Bakwan Nya mana',
			     // data: { message: `${title} - ${body}` },
			    }),
			    headers: {
			      'Content-Type': 'application/json',
			    },
			    method: 'POST',
			  });
  }

clearDataLogin(){
	this.username.clear();
	this.password.clear();
	this.setState({
	    username: '',
	    password:''
	})
}
 login(){  
  // this.props.LIST_PRODUCT_PREORITAS_CEK("joss");  
  //   console.log('Hi from React Native mantap = '+this.props.LIST_PRODUCT_PREORITAS_CEK_VALUE.dataall);
 	// this.props.getDataLogin(this.state.username,this.state.password);
 	 this.loadingButton.showLoading(true);
 	   setTimeout(() => {
	 	   	 // if(this.props.randomPeople.loginsukses === '["Sukses"]'){
	 	   	 // 		 this.loadingButton.showLoading(false);
	 	   	 // 		  this.clearDataLogin();
		     	//     //  Actions.Dasbord();
	 	   	 // }else{
	 	   	 // 		 this.loadingButton.showLoading(false);
	 	   	 // 		 this.clearDataLogin();
	 	   	 // }	  
         this.loadingButton.showLoading(false);     
	      }, 2000);
 	  	//console.log('Hi from React Native c'+this.props.randomPeople.tes);
 	  	 Actions.Dasbord();
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
              title="Login"
              titleFontSize={16}
              titleColor="rgb(255,255,255)"
              backgroundColor="#00b5ec"
              borderRadius={4}
              onPress={this.login.bind(this)}
            /> 
            <Text style={styles.TextStyleOR}> OR Login Using</Text>
            <View style={{flexDirection: 'row'}}>
                   <TouchableOpacity activeOpacity={0.5} onPress={this.loginWithFacebook.bind(this)}>
                            <Image
                             source={require('@images/facebook.png')}
                             style={styles.ImageIconStyle}
                            />
                        </TouchableOpacity>

                       <TouchableOpacity  activeOpacity={0.5} onPress={this.loginWithGoogle.bind(this)}>
                            <Image
                              source={require('@images/google.png')}
                              style={styles.ImageIconStyle}
                            />
                        </TouchableOpacity>
            </View>
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

   ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 60,
    width: 60,
    resizeMode: 'stretch',
  },
   TextStyleOR: {
    color: '#7c7c7c',
    alignItems: 'center',
    fontSize:20,
    padding: 30,
  },
});
