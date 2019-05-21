import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  TextInput,Dimensions,
  ImageBackground,
  TouchableHighlight,
  BackHandler,
} from 'react-native';
import Grid from 'react-native-grid-component'; 
import Expo, {  AdMobBanner , Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import Logo from '@pages/Logo';
import Carousel from 'react-native-snap-carousel';
import { material , iOSUIKit , iOSColors , systemWeights } from 'react-native-typography';

import AnimateLoadingButton from 'react-native-animate-loading-button';
export default class MakananDetail extends Component {   
    constructor(props) {     
    super(props);
    this.state = {
      data: [
        {id:1, harga:"Rp. 10.000", foto: require('@images/1.jpg' )  , name: "Warung Bu Jarwo",             jarak:"1 KM"   , colsimage:require('@images/m1.jpg' )},
        {id:2, harga:"Rp. 20.000", foto: require('@images/2.jpg' )  , name: "Warung Bu Ida",             jarak:"2 KM",      colsimage:require('@images/m2.jpg' )},
        {id:3, harga:"Rp. 5.000", foto: require('@images/3.jpg' )  , name: "Warung Bu Gureng ",            jarak:"3 KM",   colsimage:require('@images/c3.jpg' )},
        {id:4, harga:"Rp. 11.000", foto: require('@images/4.jpg' )  , name: "Warung Bu Slamet",         jarak:"4 KM",       colsimage:require('@images/c4.jpg' )},
        {id:5, harga:"Rp. 14.000", foto: require('@images/5.jpg' )  , name: "Mba Wah",                 jarak:"5 KM",              colsimage:require('@images/c5.jpg' )},
        {id:6, harga:"Rp. 13.000", foto: require('@images/6.jpg' )  , name: "Warung Bu Erlin",        jarak:"6 KM",         colsimage:require('@images/c6.jpg' )},
        {id:7, harga:"Rp. 15.000", foto: require('@images/7.jpg' )  , name: "Warung Bu Yunus",        jarak:"7 KM",             colsimage:require('@images/c7.jpg' )},
        {id:8, harga:"Rp. 9.000", foto: require('@images/8.jpg' )  , name: "Ridiculus mus",          jarak:"8 KM",         colsimage:require('@images/c8.jpg' )},
        {id:9, harga:"Rp. 19.000", foto: require('@images/9.jpg' )  , name: "Felis",                 jarak:"9 KM",               colsimage:require('@images/c9.jpg' )},
      ],
      comment:[
        {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name:"Frank Odalthh",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"John DoeLink",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"March SoulLaComa", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"Finn DoRemiFaso",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name:"Maria More More",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name:"Clark June Boom!", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name:"The googler",      comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      ],
      makanan: '',
    };
   // alert(this.props.idwarung);  // kiriman dari depan routers
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

 _renderItem ({item, index}) {
        return (
            <View style={styles.slide}> 
               <View  style={{flex: 1,alignSelf: 'stretch' , backgroundColor: '#FFFFFF'}} source={item.colsimage} >                     
                   <ImageBackground  style={{borderRadius:50,flex: 1,alignSelf: 'stretch'}} source={item.colsimage} />                     
                   <View style={{flexDirection: 'row'}}>
                      <Text style={material.body2 ,{ flex: 2 }}>Warung Bu Mian</Text>                                    
                   </View>
                   <View >
                      <Text style={material.caption}>Nasi goreng</Text> 
                   </View>    

                   <View style={{flexDirection: 'row',justifyContent: 'flex-end',paddingRight: 15}}>
                        <View style={{ flex : 1,}} >
                              <Text style={{ flex: 1 , paddingTop:2,fontSize: 10, color: iOSColors.red,  textAlign: 'left',}}>
                                {item.harga}
                              </Text>   
                        </View>
                      
                                <ImageBackground style={{width: 20, height: 20,textAlign: 'right', }}  source={require('@images/like.png')}>
                                    <Text  style={{color: iOSColors.white, fontSize: 7, fontWeight: 'bold', paddingTop:3,textAlign: 'center'}}>130</Text>
                                </ImageBackground>  
                                <ImageBackground style={{ width: 20, height: 20, textAlign: 'right', }}  source={require('@images/comment.png')}>
                                  <Text  style={{ color: iOSColors.white, fontSize: 7, fontWeight: 'bold', paddingTop:3,textAlign: 'center'}}>100</Text>
                                </ImageBackground>  
                                 <ImageBackground style={{ width: 20, height: 20, textAlign: 'right', }}  source={require('@images/logo.png')}>
                                  <Text  style={{ color: iOSColors.white, fontSize: 7, fontWeight: 'bold', paddingTop:3,textAlign: 'center'}}>100</Text>
                                </ImageBackground> 
                                <View style={{ paddingRight:28,}}>                                 
                                  <View style={{ flex: 2, flexDirection: 'row',  justifyContent: 'center',}}>
                                      <View>
                                         <Text style={{ flex: 1 , paddingTop:2,fontSize: 10, color: iOSColors.lightgray,  textAlign: 'right', paddingRight:20 ,}}>
                                             ({item.jarak})
                                          </Text> 
                                      </View>
                                      <View style={{ justifyContent: 'center'}}>
                                             <Text style={styles.headerColsAll}>Detail</Text>                               
                                      </View>

                                      <View style={{ justifyContent: 'center'}}>       
                                       <TouchableOpacity style={{  width:15 , height: 15,}} source={require('@images/next.png')} >                                    
                                          <Image style={{  width:15 , height: 15,}} source={require('@images/next.png')} />    
                                        </TouchableOpacity>                                   
                                      </View>                                                      
                                  </View>
                                </View>  
                       
                    </View>
              </View>
            </View>
        );
    }

 
 

  render() {
    return (
    <View   style={styles.container} >   
          <View style={styles.header}>
           <Carousel 
              ref={(c1) => { this._carousel = c1; }}
              data={this.state.data}
              renderItem={this._renderItem.bind(this)}
              layout={'stack'}
              layoutCardOffset={'18'} 
              firstItem={0}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              activeSlideAlignment={'start'}
              useScrollView={true}
              
            />
          </View>    		
           <ScrollView>       
                <View style={styles.containerDetail}>  
                        <View style={{ paddingTop: 5, borderColor: '#4d4d4f', borderBottomWidth: 3,}}>
                                <Text style={styles.name}>Makanan Tradisonal</Text>
                        </View>
                        <View style={{flex: 2, flexDirection: 'row', alignItems: 'stretch', 
                                               borderBottomColor: '#d3d2cb',  
                                               borderBottomWidth: 2}}>
                                <View style={{borderBottomColor: '#d3d2cb',  
                                               borderBottomWidth: 2, 
                                               marginBottom: 5,
                                                borderTopColor: '#d3d2cb',  
                                               borderTopWidth: 2,                                              
                                             borderRightColor: '#d3d2cb',  
                                               borderRightWidth: 2, }}> 
                                    <Image style={styles.productImg} source={this.state.data[1].colsimage}/>

                                    <View style={{flexDirection: 'row',justifyContent: 'center',marginHorizontal:10,paddingBottom:5, textAlign: 'center',}}>
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

                                <View>
                                    <View>
                                        <Text style={styles.headerCols}>Nasi Goreng</Text>                                   
                                        <Text style={styles.price}>Rp. 10.000</Text>
                                         <AnimateLoadingButton
                                            ref={c => (this.loadingButton = c)}
                                            width={100}
                                            height={20}
                                            title="Order"
                                            titleFontSize={16}
                                            titleColor="rgb(255,255,255)"
                                            backgroundColor="#00b5ec"
                                            borderRadius={4}
                                            onPress={this.orderMakananDetail.bind(this)}
                                            style={{justifyContent: 'center', textAlign: 'center'}}
                                          />                   
                                    </View>
                              </View>
                        </View>   
                      <View style={styles.starContainer}>
                          <FlatList
                              style={styles.rootC}
                              data={this.state.comment}
                              extraData={this.state}
                              ItemSeparatorComponent={() => {
                                return (
                                  <View style={styles.separatorC}/>
                                )
                              }}
                              keyExtractor={(item)=>{
                                return item.id;
                              }}
                              renderItem={(item) => {
                                const Notification = item.item;
                                return(
                                  <View style={styles.containerC}>
                                    <TouchableOpacity onPress={() => {}}>
                                      <Image style={styles.imageC} source={{uri: Notification.image}}/>
                                    </TouchableOpacity>
                                    <View style={styles.contentC}>
                                      <View style={styles.contentHeaderC}>
                                        <Text  style={styles.nameC}>{Notification.name}</Text>
                                        <Text style={styles.timeC}>
                                          9:58 am
                                        </Text>
                                      </View>
                                      <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
                                    </View>
                                  </View>
                                );
                              }}/>
                      </View>
                     
              </View>             
        </ScrollView>
     </View>
    );
  }
}


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(viewportWidth);
const SLIDE_HEIGHT = Math.round(viewportHeight / 4);

const ITEM_HORIZONTAL_MARGIN = 15;
const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
const ITEM_HEIGHT = SLIDE_HEIGHT + ITEM_HORIZONTAL_MARGIN * 2;
const SLIDER_WIDTH = viewportWidth;



const styles = StyleSheet.create({
   headerCols: {
    fontSize: 18,
    color: '#696969',
  },
  headerColsAll: {
    fontSize: 13,
    color: iOSColors.green,
    textAlign: 'right',
    paddingRight: 5,
  },
   slide: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
       
    },
header:{  
    flexDirection: 'row',
    marginTop:20,
    backgroundColor: '#FFFFFF',
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    marginBottom: 3,
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
   container: {
     flex: 1,
    backgroundColor: '#000000',
    
  },
  containerDetail: {
     flex:1,
      backgroundColor: '#FFFFFF'
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
      backgroundColor:'rgba(25,25,25,0.3)',
     
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
  productImg:{
    borderRadius: 10,
    width:100,
    height:100,
    marginHorizontal:5,
    marginVertical: 5,

  },
  name:{
    fontSize:25,
    color:"#696969",
    fontWeight:'bold',   
    paddingLeft: 5,
  },
  price:{
    fontSize:18,
    color:"red",
    fontWeight:'bold',
    paddingLeft: 5,
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20,    
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  },
  rootC: {
    backgroundColor: "#ffffff",
    marginTop:10,
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
    marginLeft:20
  },
  timeC:{
    fontSize:11,
    color:"#808080",
  },
  nameC:{
    fontSize:16,
    fontWeight:"bold",
  },
});
