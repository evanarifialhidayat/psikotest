import React, { Component } from 'react';
import {  StyleSheet,Text,  View,Image , TouchableOpacity,Alert,BackHandler 
  ,ImageBackground,ScrollView,StatusBar ,Dimensions, Platform } from 'react-native';
import Grid from 'react-native-grid-component'; 
import Expo, {  AdMobBanner , Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import Logo from '@pages/Logo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ActionButton from 'react-native-action-button';

const items = [
  { thumbnail: {  uri : require('@images/panganan.png'   ) , mulai: 'Sega' ,warna:'#499b86',buuton:'Makanan'} },
  { thumbnail: {  uri : require('@images/wedang.png'    ) , mulai: 'Wedang',warna:'#ce3968',buuton:'Minuman'} },
  { thumbnail: {  uri : require('@images/warung.png'      ) , mulai: 'Warung',warna:'#a0833b',buuton:'Toko'} },
   { thumbnail: {  uri : require('@images/travel.png' ) , mulai: 'Travel' ,warna:'#fe3161',buuton:'Travel'}},
  { thumbnail: {  uri : require('@images/kedo.png' ) , mulai: 'Kado' ,warna:'#ac888e',buuton:'Pesanan'}}
 ];

const SLIDER_1_FIRST_ITEM = 0;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const sliderWidth = viewportWidth;
const itemWidth = viewportWidth;

export default class Dasbord extends Component { 
 constructor(props) {
    super(props); 
    this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        data: [
                {id:1, colsi: require('@images/c1.jpg' )},
                {id:2, colsi: require('@images/c2.jpg' )},
                {id:3, colsi: require('@images/c3.jpg' )},
                {id:4, colsi: require('@images/c4.jpg' )},
                {id:5, colsi: require('@images/c5.jpg' )},
                {id:6, colsi: require('@images/c6.jpg' )},
                {id:7, colsi: require('@images/c7.jpg' )},
                {id:8, colsi: require('@images/c8.jpg' )}
              ],
               modalVisible: false,
    };


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

   _renderItemHeader ({item, index}){
        return (
            <TouchableOpacity key={index} >
                <Image  style = {styles.image} source = { item.colsi } />
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
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={this.state.data}
                    renderItem={this._renderItemHeader.bind(this)}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.80}
                    activeSlideAlignment={'start'}
                    inactiveSlideOpacity={0.7}
                    inactiveSlideShift={0.6}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={3}
                    autoplay={true}
                    autoplayDelay={2000}
                    autoplayInterval={4000}     
                />
          </View>
         
    		       
        <View style={styles.signupInput}>
              <Grid
                style={styles.list}
                renderItem={this._renderItem}               
                data={items}
                itemsPerRow={4}
              />

              <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#3498db' title="Home" onPress={() => {this.backAndroid()}}>
                   <Image source={require('@images/house.png')}  style={styles.actionButtonIcon}  />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#8e2600' title="Keluar" onPress={() => {this.backAndroid()}}>
                   <Image source={require('@images/signaling.png')}  style={styles.actionButtonIcon}  />
                </ActionButton.Item>                          
              </ActionButton>
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
  },
   slider: {
        marginTop: 0,
        overflow: 'visible' 
    },
     sliderContentContainer: {
        paddingVertical: 0 
    },
     image: {
        resizeMode: 'cover',
        height: Dimensions.get('window').width / 2,
        width: Dimensions.get('window').width
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 40,
      width: 40,
      color: 'white',
    },
});
