import React, { Component }  from 'react';
import { StyleSheet, Text, View ,
Image ,TouchableOpacity , Animated , Easing } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Logo extends Component<{}>{
  constructor(){
    super()
    }
  goBack(){
  // Actions.refresh({param1: 'hello', param2: 'world'})
   // Actions.pop();
   //Actions.refresh();
  }
  render() {
    return (
      <View >
        <TouchableOpacity onPress={this.goBack}> 
          <Animated.Image style={{width:150,height:150, marginVertical: 15,            
          }}
          source={require('@images/logo.png')}/>
        </TouchableOpacity>
    
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  logoText : {
    marginVertical: 5,
    fontSize : 18 ,
    color : 'rgba(0,0,0,0.7)'
  }
});
