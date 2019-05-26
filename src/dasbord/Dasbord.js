import React, { Component } from 'react';
import {  StyleSheet,Text,  View,Image , TouchableOpacity,Alert,BackHandler 
  ,ImageBackground,ScrollView,StatusBar ,Dimensions, Platform ,TextInput} from 'react-native';
import Grid from 'react-native-grid-component'; 
import Expo, {  AdMobBanner , Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import Logo from '@pages/Logo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ActionButton from 'react-native-action-button';
import IconBadge from 'react-native-icon-badge';
import { material , iOSUIKit , iOSColors , systemWeights } from 'react-native-typography';

const items = [ 
  { thumbnail: {  uri : require('@images/panganan.png'   ) , mulai: 'Sega' ,buuton:'Makanan'} },
  { thumbnail: {  uri : require('@images/wedang.png'    ) , mulai: 'Wedang',buuton:'Minuman'} },
  { thumbnail: {  uri : require('@images/warung.png'      ) , mulai: 'Warung',buuton:'Toko'} },
   { thumbnail: {  uri : require('@images/travel.png' ) , mulai: 'Travel' ,buuton:'Travel'}},
  { thumbnail: {  uri : require('@images/kedo.png' ) , mulai: 'Kado' ,buuton:'Pesanan'}}
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
                {id:1, colsi: require('@images/c1.jpg'),namawarung : 'Warung Bu Mian',namaproduct: 'Nasi Goreng',  jarak:'9 KM', harga:'Rp 10.000',like:'10',comment:'40',logo:'500'},
                {id:2, colsi: require('@images/c2.jpg'),namawarung : 'Warung Bu Takbir',namaproduct: 'Nasi Kebuli',  jarak:'19 KM', harga:'Rp 12.000',like:'2',comment:'20',logo:'52'},
                {id:3, colsi: require('@images/c3.jpg'),namawarung : 'Warung Bu Budi',namaproduct: 'Empal Gentong',  jarak:'5 KM', harga:'Rp 15.000' ,like:'100',comment:'2',logo:'250'},
                {id:4, colsi: require('@images/c4.jpg'),namawarung : 'Warung Bu Siti',namaproduct: 'Telor Ceplok' ,  jarak:'7 KM', harga:'Rp 14.000',like:'24',comment:'24',logo:'33'},
                {id:5, colsi: require('@images/c5.jpg'),namawarung : 'Warung Bu Desi',namaproduct: 'Kentang Goreng' ,  jarak:'3 KM', harga:'Rp 117.000',like:'33',comment:'120',logo:'44'},
                {id:6, colsi: require('@images/c6.jpg'),namawarung : 'Warung Kopi',namaproduct: 'Jajanan Malam' ,  jarak:'1 KM', harga:'Rp 153.000',like:'1',comment:'60',logo:'553'},
                {id:7, colsi: require('@images/c7.jpg'),namawarung : 'Warung Pak Ndut',namaproduct: 'Nasi Betawi',  jarak:'10 KM', harga:'Rp 15.000' ,like:'9',comment:'80',logo:'77'},
                {id:8, colsi: require('@images/c8.jpg'),namawarung : 'Warung Pak Mirsun',namaproduct: 'Kangkung',  jarak:'2 KM', harga:'Rp 1.000',like:'10',comment:'33',logo:'32'}
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
                      <View style={{        flex: 1 , 
                                            flexDirection: 'column' , 
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',}}>
                            <Image source = { data.thumbnail.uri } style = { styles.menuImage }/>
                      </View>
                      <View>
                            <Text style={styles.footButton} >{ data.thumbnail.buuton }</Text>
                      </View>
            </TouchableOpacity>
          );
   }

   _renderItemHeader ({item, index}){
        return (
            <TouchableOpacity key={index} >
                <ImageBackground  style = {styles.image} source = { item.colsi } >
                              <View style={{ flex: 1 , flexDirection: 'column' , paddingBottom: 25}}>
                              </View>
                              <View style={{
                                            flex: 1 , 
                                            flexDirection: 'column' , 
                                            justifyContent: 'flex-end',
                                            alignItems: 'flex-start',
                                            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                                            paddingHorizontal: 3,
                                            }}>
                                      
                                            <View style={{flexDirection: 'row' }}>
                                                <Text style={material.body2 ,{ flex: 2 ,}}>Warung Bu Mian</Text>                                    
                                            </View>
                                            <View style={{flexDirection: 'row' }}>
                                                <Text style={material.caption,{ flex: 2 }}>Nasi goreng</Text>   
                                            </View>   
                                             <View style={{flexDirection: 'row'}}>
                                                <Text style={material.caption,{ flex: 2 }}>Jln. Jendral Sudirman No.34 Depan Sma</Text>    
                                            </View> 
                                            <View style={{flexDirection: 'row',justifyContent: 'flex-end',paddingRight: 15}}>
                                                  <View style={{ flex : 1,}} >
                                                        <Text style={{ flex: 1 , paddingTop:2,fontSize: 10, color: iOSColors.red,  textAlign: 'left',}}>
                                                         {item.harga}
                                                        </Text>   
                                                  </View>                                  
                                                          <ImageBackground style={{width: 20, height: 20,textAlign: 'right', }}  source={require('@images/like.png')}>
                                                              <Text  style={{color: iOSColors.white, fontSize: 7, fontWeight: 'bold', paddingTop:3,textAlign: 'center'}}>{item.like}</Text>
                                                          </ImageBackground>  
                                                          <ImageBackground style={{ width: 20, height: 20, textAlign: 'right', }}  source={require('@images/comment.png')}>
                                                            <Text  style={{ color: iOSColors.white, fontSize: 7, fontWeight: 'bold', paddingTop:3,textAlign: 'center'}}>{item.comment}</Text>
                                                          </ImageBackground>  
                                                           <ImageBackground style={{ width: 20, height: 20, textAlign: 'right', }}  source={require('@images/logo.png')}>
                                                            <Text  style={{ color: iOSColors.white, fontSize: 7, fontWeight: 'bold', paddingTop:3,textAlign: 'center'}}>{item.logo}</Text>
                                                          </ImageBackground> 
                                                          <View>
                                                            <Text style={{ flex: 1 , paddingTop:2,fontSize: 10, color: iOSColors.lightgray,  textAlign: 'right',}}>
                                                               ({item.jarak})
                                                            </Text> 
                                                          </View> 
                                            </View>
                                 </View>
                                         
                </ImageBackground>                
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
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>
              <Image style={[styles.icon, styles.inputIcon]} source={require('@images/search.png')}/>
              <TextInput style={styles.inputs}
                  ref={'txtPassword'}
                  placeholder="Search"
                  underlineColorAndroid='transparent'
                  onChangeText={(makanan) => this.setState({makanan})}
                  />              
            </View>
            <IconBadge
                        MainElement={
                          <View style={{ backgroundColor: "#ffffff", borderRadius: 100,  }}>
                             <Image source={require('@images/lonceng.png')}  style={styles.actionButtonIconNotif}  />
                          </View>
                        }
                        BadgeElement={
                             <Text style={{color:'#FFFFFF' , fontSize: 10,}}>3</Text>
                        }
                        IconBadgeStyle={
                          {
                            width:17,
                            height:17,
                            backgroundColor: '#ff0000'
                          }
                        }
                        Hidden={this.state.BadgeCount==0}
              />
          </View>
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
    backgroundColor: '#FFFFFF',
    
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
    height: 80,
    margin: 1,    
    backgroundColor:'#d7ede7',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  list: {
      flex: 1,     
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
    actionButtonIconNotif: {
      fontSize: 8,
      height: 39,
      width: 39,
      color: 'white',        
    },
    formContent:{
    flexDirection: 'row',
    marginTop:20,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
      backgroundColor:'rgba(25,25,25,0.0)',
      borderRadius:10,
      borderBottomWidth: 3,
      borderBottomColor:  '#000000',
      height:30,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:5,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
   inputs:{
      height:35,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
});











// <View style={{  flex: 1,
//                                 flexDirection: 'row',
//                                 position: 'absolute', 
//                                 justifyContent: 'flex-end',
//                                 top: 0, 
//                                 left: 0, 
//                                 right: 0, 
//                                 bottom: 0, 
//                                 paddingVertical: 25,                               
//                               }}>
//                       <IconBadge
//                         MainElement={
//                           <View style={{ backgroundColor: "#ffffff", borderRadius: 100,  }}>
//                              <Image source={require('@images/lonceng.png')}  style={styles.actionButtonIconNotif}  />
//                           </View>
//                         }
//                         BadgeElement={
//                              <Text style={{color:'#FFFFFF'}}>3</Text>
//                         }
//                         IconBadgeStyle={
//                           {
//                             width:20,
//                             height:20,
//                             backgroundColor: '#ff0000'
//                           }
//                         }
//                         Hidden={this.state.BadgeCount==0}
//                         />
//                 </View>