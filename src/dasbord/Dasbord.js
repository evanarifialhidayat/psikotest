import React, { Component } from 'react';
import {  StyleSheet,Text,  View,Image , TouchableOpacity,Alert,BackHandler ,ImageBackground } from 'react-native';
import Grid from 'react-native-grid-component'; 
import Expo, {  AdMobBanner , Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import Logo from '@pages/Logo';

const items = [
  { thumbnail: {  uri : require('@images/panganan.png'   ) , mulai: 'Sega' ,warna:'#499b86',buuton:'Makanan'} },
  { thumbnail: {  uri : require('@images/wedang.png'    ) , mulai: 'Wedang',warna:'#ce3968',buuton:'Minuman'} },
  { thumbnail: {  uri : require('@images/warung.png'      ) , mulai: 'Warung',warna:'#a0833b',buuton:'Toko'} },
   { thumbnail: {  uri : require('@images/travel.png' ) , mulai: 'Travel' ,warna:'#fe3161',buuton:'Travel'}},
  { thumbnail: {  uri : require('@images/kedo.png' ) , mulai: 'Kado' ,warna:'#ac888e',buuton:'Pesanan'}}
 
];



export default class Dasbord extends Component { 
   state = {
    modalVisible: false,
  };
    constructor(props) {
    super(props); 
    }

 componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT); 
   BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) 
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) 
  }

  backAndroid () {
    if (Actions.state.index === 0) {
      return false;
    }
    Actions.Login(); 
    return true; 
  }

  _renderItem = (data, i) =>  
    { 
         return(  
           <TouchableOpacity style={styles.item} key={i} 
                      onPress={this._eventLavel.bind(this, data.thumbnail.mulai)}>
                        <Image source = { data.thumbnail.uri } style = { styles.menuImage }/>
                        <View style={{backgroundColor: data.thumbnail.warna}}>
            						    <Text style={styles.footButton} >{ data.thumbnail.buuton }</Text>
            						</View>
            </TouchableOpacity>
          );
   }
 
 async _eventLavel(item){
      if(item === 'Dasbord'){
         Actions.Login(); 
      }
      if(item === 'Sega'){
         Actions.Makanan(); 
      }
      if(item === 'Wedang'){
         Actions.Minuman(); 
      }
  }
 
 

  render() {
    return (
    <ImageBackground   style={styles.container} >   
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={this.backAndroid}> 
                  <Image style={styles.avatar}
                     source={require('@images/logo.png')}  />
                  </TouchableOpacity>
                <Text style={styles.name}>
                  Abang
                </Text>
            </View>
          </View>
    		       
        <View style={styles.signupInput}>
              <Grid
                style={styles.list}
                renderItem={this._renderItem}               
                data={items}
                itemsPerRow={4}
              />
        </View>
     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
header:{
    backgroundColor: "#ffffff",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#cc181e",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#cc181e",
    fontWeight:'600',
  },
  container: {
     flex: 1,
    backgroundColor: '#d7ede7',
    
  },
  signupInput: {
     flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row'
  },
  item: {
    flex: 1,
    height: 95,
    margin: 1,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent: 'center',
  },
  list: {
      flex: 1,
      backgroundColor:'#d7ede7',
     
  },
  blurImage:
    {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        resizeMode: 'cover'
    }, 
    menuImage:
    {
        top: 0,
        bottom: 0, 
        left: 0,
        right: 0,
        width: 80, 
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
   footButton: {
    textAlign: 'center', 
    fontWeight: 'bold',
    marginTop: 0,
   alignItems: 'center',
     justifyContent: 'center',
     color : 'white',
  }
});
