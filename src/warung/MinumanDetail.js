import React, { Component } from 'react';
import {  StyleSheet,Text,  View,Image , TouchableOpacity,Alert,BackHandler 
  ,ImageBackground,ScrollView,StatusBar ,Dimensions, Platform ,TextInput,
FlatList,List,} from 'react-native';
import Grid from 'react-native-grid-component'; 
import Expo, {  AdMobBanner , Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import Logo from '@pages/Logo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ActionButton from 'react-native-action-button';
import IconBadge from 'react-native-icon-badge';
import { material , iOSUIKit , iOSColors , systemWeights } from 'react-native-typography';
import AnimateLoadingButton from 'react-native-animate-loading-button';

const SLIDER_1_FIRST_ITEM = 0;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const sliderWidth = viewportWidth;
const itemWidth = viewportWidth;

export default class MinumanDetail extends Component { 
 constructor(props) {
    super(props);  
    this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        data: [
                {id:1, colsi: require('@images/m1.jpg'),namawarung : 'Warung Bu Mian',namaproduct: 'Nasi Goreng',  jarak:'9 KM', harga:'Rp 10.000',like:'10',comment:'40',logo:'500'},
                {id:2, colsi: require('@images/m2.jpg'),namawarung : 'Warung Bu Takbir',namaproduct: 'Nasi Kebuli',  jarak:'19 KM', harga:'Rp 12.000',like:'2',comment:'20',logo:'52'},
                {id:3, colsi: require('@images/m3.jpg'),namawarung : 'Warung Bu Budi',namaproduct: 'Empal Gentong',  jarak:'5 KM', harga:'Rp 15.000' ,like:'100',comment:'2',logo:'250'},
                {id:4, colsi: require('@images/m4.jpg'),namawarung : 'Warung Bu Siti',namaproduct: 'Telor Ceplok' ,  jarak:'7 KM', harga:'Rp 14.000',like:'24',comment:'24',logo:'33'},
                {id:5, colsi: require('@images/m5.jpg'),namawarung : 'Warung Bu Desi',namaproduct: 'Kentang Goreng' ,  jarak:'3 KM', harga:'Rp 117.000',like:'33',comment:'120',logo:'44'},
                {id:6, colsi: require('@images/m6.jpg'),namawarung : 'Warung Kopi',namaproduct: 'Jajanan Malam' ,  jarak:'1 KM', harga:'Rp 153.000',like:'1',comment:'60',logo:'553'},
                {id:7, colsi: require('@images/m7.jpg'),namawarung : 'Warung Pak Ndut',namaproduct: 'Nasi Betawi',  jarak:'10 KM', harga:'Rp 15.000' ,like:'9',comment:'80',logo:'77'},
                {id:8, colsi: require('@images/m8.jpg'),namawarung : 'Warung Pak Mirsun',namaproduct: 'Kangkung',  jarak:'2 KM', harga:'Rp 1.000',like:'10',comment:'33',logo:'32'}
              ],
              commentlist:[
                {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name:"Evan Arifial Hidayat",    comment:"Minaman Nya Mantap besok gua kesiti lagi.. ada diskon ga nih hehehe"},
                {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"John DoeLink",            comment:"Nice "},
                {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"Rendi Akbar Riyadi",      comment:"Tambah Lagi Besok Delivery Yah hehehe"},
                {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"Nukman Aziz Basalamah",   comment:"Minuman yang simpel, umum dan bisa ditemui dimana-mana. Yang suka makan nasi goreng juga sama, mereka pribadi yang simpel, gak suka ribet dan apa adanya. Orang-orang yang suka nasi goreng bisa dibilang orang-orang yang mainstream banget deh. Kecuali, orang-orang yang suka makan nasi goreng kambing. Mereka berbeda. Para pemakan nasi goreng kambing adalah orang-orang paling asik dan paling keren yang pernah kamu temui."},
                {id:5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name:"Maulana",                 comment:"Mantap Markotop ..."},
                {id:6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name:"Prabowo",                 comment:"Minuman ya mantap markotop ... dan mantullllllll"},
                {id:7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name:"Jokowiiiiiii",            comment:"GA ENAKKKKKKKK ......."}
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
  orderMakananDetail(){  
   this.loadingButton.showLoading(true);
     setTimeout(() => {
             this.loadingButton.showLoading(false);
        }, 2000);
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
        <ScrollView> 
          <View>              
                   <View style={styles.containerDetail}>                        
                        <View style={{flex: 1, 
                                      flexDirection: 'row', 
                                      alignItems: 'stretch', 
                                      borderBottomColor: '#d3d2cb',  
                                      borderBottomWidth: 1}}>
                                      <View style={{ borderBottomColor: '#d3d2cb',  
                                               borderBottomWidth: 1, 
                                               marginBottom: 5,
                                               borderTopColor: '#d3d2cb',  
                                               borderTopWidth: 1,                                              
                                               borderRightColor: '#d3d2cb',  
                                               borderRightWidth: 1, }}> 
                                               <Image style={styles.productImg} source={this.state.data[1].colsi}/>
                                               <View style={{flexDirection: 'row',
                                                          justifyContent: 'center',
                                                          marginHorizontal:10,
                                                          paddingBottom:5, 
                                                          textAlign: 'center',}}>
                                                      <View style={{flexDirection: 'column'}}>
                                                          <ImageBackground style={{width: 20, height: 20,textAlign: 'center', }}  source={require('@images/like.png')} />                                                
                                                          <Text  style={{ justifyContent: 'center' ,color: iOSColors.black, fontSize: 7, fontWeight: 'bold', paddingTop:3,textAlign: 'center'}}>130</Text>
                                                      </View>
                                                      <View style={{flexDirection: 'column'}}>
                                                          <ImageBackground style={{width: 20, height: 20,textAlign: 'center', }}  source={require('@images/comment.png')} />                                                
                                                          <Text  style={{ justifyContent: 'center' ,color: iOSColors.black, fontSize: 7, fontWeight: 'bold', paddingTop:3,textAlign: 'center'}}>130</Text>
                                                      </View>
                                                      <View style={{flexDirection: 'column'}}>
                                                          <ImageBackground style={{width: 20, height: 20,textAlign: 'center', }}  source={require('@images/logo.png')} />                                                
                                                          <Text  style={{ justifyContent: 'center' ,color: iOSColors.black, fontSize: 7, fontWeight: 'bold', paddingTop:3,textAlign: 'center'}}>130</Text>
                                                      </View>                                                                                                 
                                              </View>
                                    </View>
                                    <View style={{flex:1,}}>
                                        <View style={{       flexDirection: 'column',
                                                             paddingTop: 5, 
                                                             borderColor: '#4d4d4f', 
                                                             borderBottomWidth: 4, 
                                                             backgroundColor : '#5acea6',}}>
                                                      <Text style={styles.headerCols}>Makanan Tradisonal</Text>
                                        </View>
                                        <View>
                                                       <View style={{  flex: 1,    
                                                                  flexDirection: 'row',    
                                                                  justifyContent: 'flex-end',
                                                                  position: 'absolute',
                                                                  top: 0,
                                                                  bottom: 6,
                                                                  left: 0,
                                                                  right: 6,}}> 
                                                                  <Text style={styles.headerColsDetailKM}>(10 KM)</Text>  
                                                        </View>
                                                      <Text style={styles.headerColsDetail}>Warung Bu Mian</Text>       
                                                      <Text style={styles.headerColsDetail}>Nasi Goreng</Text>      
                                                      <Text style={styles.headerColsDetail}>Jln. Jendral Sudirman No.34 Depan SMA</Text>                          
                                                      <Text style={styles.price}>Rp. 10.000</Text>
                                                              
                                                  
                                        </View>
                                        
                                        <View style={{  flex: 1,    
                                                                  flexDirection: 'row',    
                                                                  justifyContent: 'flex-end',
                                                                  alignItems: 'flex-end',
                                                                  position: 'absolute',
                                                                  top: 0,
                                                                  bottom: 6,
                                                                  left: 0,
                                                                  right: 6,}}>     
                                                    <TouchableOpacity onPress={() => {}}>  
                                                          <ImageBackground style={{width: 40, height: 40,textAlign: 'right', }}  source={require('@images/like.png')}>
                                                              <View style={{
                                                                              flex: 1,
                                                                              flexDirection: 'row',
                                                                              justifyContent: 'center',
                                                                              alignItems: 'center',
                                                              }}>
                                                                    <Text  style={{ color: iOSColors.white, 
                                                                      fontSize: 12, 
                                                                      fontWeight: 'bold', 
                                                                      textAlign: 'center',
                                                                    }}>Like</Text>
                                                              </View>
                                                          </ImageBackground>  
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => {}}>      
                                                           <ImageBackground style={{ width: 40, height: 40, textAlign: 'right', }}  source={require('@images/logo.png')}>
                                                            <View style={{
                                                                              flex: 1,
                                                                              flexDirection: 'row',
                                                                              justifyContent: 'center',
                                                                              alignItems: 'center',
                                                              }}>
                                                                    <Text  style={{ color: iOSColors.white, 
                                                                      fontSize: 12, 
                                                                      fontWeight: 'bold', 
                                                                      textAlign: 'center',
                                                                    }}>Order</Text>
                                                              </View>
                                                          </ImageBackground>   
                                                    </TouchableOpacity>
                                        </View>                                       
                                    </View>
                        </View>
                        <View style={{flex: 8, 
                                      flexDirection: 'row', 
                                      alignItems: 'stretch',                                       
                                    }}>
                            <View style={{flex: 7,   
                                      borderBottomColor: '#d3d2cb',  
                                      borderBottomWidth: 1, 
                                      paddingLeft : 15 }}>
                                <TextInput 
                                                  underlineColorAndroid='rgba(0,0,0,0)'
                                                  onChangeText={username => this.setState({username})}
                                                  placeholder="Typing Comment"
                                                  placeholderTextColor = "#ffffff"
                                                  onSubmitEditing={() => this.username.focus()}
                                                  ref={(input) => this.username = input }
                                                />  
                             </View>
                             <View style={{ flex: 1, 
                                            backgroundColor: "#FFFFFF" , 
                                            justifyContent: 'center' , 
                                            alignItems: 'center',
                                            borderBottomColor: '#d3d2cb',  
                                            borderBottomWidth: 1,
                                      }}>
                                       <TouchableOpacity onPress={() => {}}>
                                          <ImageBackground style={{ width: 40, height: 40, textAlign: 'right', }}  source={require('@images/comment.png')}>
                                            <View style={{
                                                                                  flex: 1,
                                                                                  flexDirection: 'row',
                                                                                  justifyContent: 'center',
                                                                                  alignItems: 'center',
                                                                  }}>
                                                                        <Text  style={{ color: iOSColors.white, 
                                                                          fontSize: 15, 
                                                                          fontWeight: 'bold', 
                                                                          textAlign: 'center',
                                                                        }}>+</Text>
                                                                  </View>
                                          </ImageBackground> 
                                      </TouchableOpacity>
                             </View>
                        </View>
                        <View style={styles.starContainer}>
                                <FlatList
                                    style={styles.rootC}
                                    data={this.state.commentlist}
                                    extraData={this.state}
                                    ItemSeparatorComponent={() => {
                                      return (
                                        <View style={styles.separatorC}/>
                                      )
                                    }}
                                    keyExtractor={(item)=>{
                                      return item.id;
                                    }}
                                    keyExtractor={item => item.id}
                                    renderItem={(item) => {
                                            return(
                                              <View style={{flex: 8, 
                                                    flexDirection: 'row', 
                                                    alignItems: 'stretch',                                       
                                                  }}>
                                                    <View style={{flex: 1,
                                                                                            flexDirection: 'row',
                                                                                            justifyContent: 'center',
                                                                                            alignItems: 'flex-start',   }}>
                                                          <TouchableOpacity onPress={() => {}}>
                                                            <Image style={styles.imageC} source={{uri: item.item.image}}/>
                                                          </TouchableOpacity>
                                                    </View>
                                                    <View style={{flex: 7,   }}>
                                                           <View style={styles.contentC}>
                                                               <View style={styles.contentHeaderC}>
                                                                <Text  style={styles.nameC}>{item.item.name}</Text>
                                                                <Text style={styles.timeC}>
                                                                  9:58 am
                                                                </Text>
                                                              </View>
                                                              <Text rkType='primary3 mediumLine'>{item.item.comment}</Text>
                                                            </View>
                                                    </View>
                                              </View>
                                              );
                                    }}/>
                      </View>
                   </View>
                 </View>
             </ScrollView>    
              <View style={{ flex: 1,    
                              flexDirection: 'column',    
                              justifyContent: 'flex-end',
                              alignItems: 'flex-end',
                              position: 'absolute',
                              top: 0,
                              bottom: 6,
                              left: 0,
                              right: 6,}}>   
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
   containerDetail: {
     flex:1,
      backgroundColor: '#FFFFFF'
  },
  productImg:{
    borderRadius: 10,
    width:100,
    height:100,
    marginHorizontal:5,
    marginVertical: 5,

  },
   headerCols: {
    fontSize: 15,
    color: iOSColors.green,
    paddingLeft: 3,
  },
  headerColsDetail:{
    fontSize: 13,
    color: material.body2,
    paddingLeft: 3,
  },
  headerColsDetailKM:{
    fontSize: 13,
    color: material.body2,
    paddingLeft: 3,
    fontWeight: 'bold',
  },
  price:{
    fontSize:18,
    color:"red",
    fontWeight:'bold',
    paddingLeft: 3,
  },
   starContainer:{
    justifyContent:'center', 
    flexDirection:'row', 
    marginTop:5,    
  },
  rootC: {
    backgroundColor: "#ffffff",
    marginTop:2,
  },
  containerC: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  contentC: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeaderC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separatorC: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  imageC:{
    width:45,
    height:45,
    borderRadius:20,
  },
  timeC:{
    fontSize:11,
    color:"#808080",
  },
  nameC:{
    fontSize:16,
    fontWeight:"bold",
  },
    inputBox: {
    borderRadius : 15,
    borderBottomWidth: 3,
    borderBottomColor:  '#000000',
    paddingHorizontal: 16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
});







// <View style={{  flex: 1,    
//                                                                   flexDirection: 'column',    
//                                                                   justifyContent: 'flex-end',
//                                                                   alignItems: 'flex-end',
//                                                                   position: 'absolute',
//                                                                   top: 0,
//                                                                   bottom: 6,
//                                                                   left: 0,
//                                                                   right: 6,}}> 
//                                                       <AnimateLoadingButton
//                                                           ref={c => (this.loadingButton = c)}
//                                                           width={100}
//                                                           height={20}
//                                                           title="Order"
//                                                           titleFontSize={16}
//                                                           titleColor="rgb(255,255,255)"
//                                                           backgroundColor="#00b5ec"
//                                                           borderRadius={4}
//                                                           onPress={this.orderMakananDetail.bind(this)}
//                                                       />      
//                                         </View>