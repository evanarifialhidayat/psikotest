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
  TouchableHighlight
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { material , iOSUIKit , iOSColors , systemWeights } from 'react-native-typography';
import { Actions } from 'react-native-router-flux';
export default class Makanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, harga:"Rp. 10.000", foto: require('@images/1.jpg' )  , name: "Warung Bu Jarwo",             jarak:"1 KM"   , colsimage:require('@images/c1.jpg' )},
        {id:2, harga:"Rp. 20.000", foto: require('@images/2.jpg' )  , name: "Warung Bu Ida",             jarak:"2 KM",      colsimage:require('@images/c2.jpg' )},
        {id:3, harga:"Rp. 5.000", foto: require('@images/3.jpg' )  , name: "Warung Bu Gureng ",            jarak:"3 KM",   colsimage:require('@images/c3.jpg' )},
        {id:4, harga:"Rp. 11.000", foto: require('@images/4.jpg' )  , name: "Warung Bu Slamet",         jarak:"4 KM",       colsimage:require('@images/c4.jpg' )},
        {id:5, harga:"Rp. 14.000", foto: require('@images/5.jpg' )  , name: "Mba Wah",                 jarak:"5 KM",              colsimage:require('@images/c5.jpg' )},
        {id:6, harga:"Rp. 13.000", foto: require('@images/6.jpg' )  , name: "Warung Bu Erlin",        jarak:"6 KM",         colsimage:require('@images/c6.jpg' )},
        {id:7, harga:"Rp. 15.000", foto: require('@images/7.jpg' )  , name: "Warung Bu Yunus",        jarak:"7 KM",             colsimage:require('@images/c7.jpg' )},
        {id:8, harga:"Rp. 9.000", foto: require('@images/8.jpg' )  , name: "Ridiculus mus",          jarak:"8 KM",         colsimage:require('@images/c8.jpg' )},
        {id:9, harga:"Rp. 19.000", foto: require('@images/9.jpg' )  , name: "Felis",                 jarak:"9 KM",               colsimage:require('@images/c9.jpg' )},
      ],
      makanan: '',
    };
  }
  
  onPresMakanan(id){
   //  Alert.alert('ss'+id);
   Actions.MakananDetail({idwarung: id});
  }

_renderItem ({item, index}) {
        return (
            <View style={styles.slide}>    
              <TouchableOpacity  style={{borderRadius:10,flex: 1,alignSelf: 'stretch'}} source={item.colsimage}
                onPress={this.onPresMakanan.bind(this,item.id)}
              >                     
                   <ImageBackground  style={{borderRadius:10,flex: 1,alignSelf: 'stretch'}} source={item.colsimage} />                     
                   <View style={{flexDirection: 'row'}}>
                      <Text style={material.body2 ,{ flex: 2 }}>Warung Bu Mian</Text>                                    
                   </View>
                   <View >
                      <Text style={material.caption}>Nasi goreng</Text>   
                      <Text style={material.caption}>Jln. Jendral Sudirman No.34 Depan Sma</Text>    
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
                                <View>
                                  <Text style={{ flex: 1 , paddingTop:2,fontSize: 10, color: iOSColors.lightgray,  textAlign: 'right',}}>
                                     ({item.jarak})
                                  </Text> 
                                </View>  
                       
                    </View>
              </TouchableOpacity>
            </View>
        );
    }

  render() {
    return (
      <View style={styles.container}>
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
        </View>

      <ScrollView>
        <View style={{backgroundColor: '#FFFFFF'}}>
            <View style={{ height: 20, flexDirection: 'row',paddingVertical: 5, paddingHorizontal: 2, paddingBottom:15 ,paddingTop: 10, borderColor: '#4d4d4f', borderBottomWidth: 3,}}>
                    <View style={{ flex: 8,  justifyContent: 'center'}}>
                        <Text style={styles.headerCols}>Makanan Tradisonal</Text>
                    </View>

                   <View style={{ flex: 2, flexDirection: 'row',  justifyContent: 'center',}}>
                        <View style={{ justifyContent: 'center'}}>
                               <Text style={styles.headerColsAll}>Lainnya</Text>                               
                        </View>

                        <View style={{ justifyContent: 'center'}}>       
                         <TouchableOpacity style={{  width:15 , height: 15,}} source={require('@images/next.png')} >                                    
                            <Image style={{  width:15 , height: 15,}} source={require('@images/next.png')} />    
                          </TouchableOpacity>                                   
                        </View>                                                      
                    </View>
            </View>
            <Carousel 
              ref={(c1) => { this._carousel = c1; }}
              data={this.state.data}
              renderItem={this._renderItem.bind(this)}
              layout={'default'}
              firstItem={0}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              activeSlideAlignment={'start'}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              enableMomentum={true}    
            />

            <View style={{ height: 20, flexDirection: 'row',paddingVertical: 5, paddingHorizontal: 2, paddingBottom:15 ,paddingTop: 10,  borderColor: '#4d4d4f', borderBottomWidth: 3,}}>
                    <View style={{ flex: 8,  justifyContent: 'center'}}>
                        <Text style={styles.headerCols}>Makanan Melenial</Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row',  justifyContent: 'center',}}>
                        <View style={{ justifyContent: 'center'}}>
                             <Text style={styles.headerColsAll}>Lainnya</Text>
                        </View>
                        <View style={{ justifyContent: 'center'}}>       
                         <TouchableOpacity style={{  width:15 , height: 15,}} source={require('@images/next.png')} >                                    
                            <Image style={{  width:15 , height: 15,}} source={require('@images/next.png')} />    
                          </TouchableOpacity>                                   
                        </View>                        
                    </View>
            </View> 
          <Carousel 
              ref={(c2) => { this._carousel = c2; }}
              data={this.state.data}
              renderItem={this._renderItem.bind(this)}
              layout={'default'}
              firstItem={0}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableMomentum={true}  
            />

            <View style={{ height: 20, flexDirection: 'row',paddingVertical: 5, paddingHorizontal: 2, paddingBottom:15 ,paddingTop: 10,  borderColor: '#4d4d4f', borderBottomWidth: 3,}}>
                    <View style={{ flex: 8,  justifyContent: 'center'}}>
                        <Text style={styles.headerCols}>Jajanan Tradisonal</Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row',  justifyContent: 'center',}}>
                        <View style={{ justifyContent: 'center'}}>
                             <Text style={styles.headerColsAll}>Lainnya</Text>
                        </View>
                        <View style={{ justifyContent: 'center'}}>       
                         <TouchableOpacity style={{  width:15 , height: 15,}} source={require('@images/next.png')} >                                    
                            <Image style={{  width:15 , height: 15,}} source={require('@images/next.png')} />    
                          </TouchableOpacity>                                   
                        </View>                              
                    </View>
            </View> 
          <Carousel 
              ref={(c3) => { this._carousel = c3; }}
              data={this.state.data}
              renderItem={this._renderItem.bind(this)}
              layout={'default'}
              firstItem={0}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableMomentum={true}  
            />

            <View style={{ height: 20, flexDirection: 'row',paddingVertical: 5, paddingHorizontal: 2, paddingBottom:15 ,paddingTop: 10, borderColor: '#4d4d4f', borderBottomWidth: 3,}}>
                    <View style={{ flex: 8,  justifyContent: 'center'}}>
                        <Text style={styles.headerCols}>Jajanan Melenial</Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row',  justifyContent: 'center',}}>
                        <View style={{ justifyContent: 'center'}}>
                             <Text style={styles.headerColsAll}>Lainnya</Text>
                        </View>
                         <View style={{ justifyContent: 'center'}}>       
                         <TouchableOpacity style={{  width:15 , height: 15,}} source={require('@images/next.png')} >                                    
                            <Image style={{  width:15 , height: 15,}} source={require('@images/next.png')} />    
                          </TouchableOpacity>                                   
                        </View>                            
                    </View>
            </View> 
            <Carousel 
              ref={(c4) => { this._carousel = c4; }}
              data={this.state.data}
              renderItem={this._renderItem.bind(this)}
              layout={'default'}
              firstItem={0}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableMomentum={true}  
            />

            <View style={{ height: 20, flexDirection: 'row',paddingVertical: 5, paddingHorizontal: 2, paddingBottom:15 ,paddingTop: 10,  borderColor: '#4d4d4f', borderBottomWidth: 3,}}>
                    <View style={{ flex: 8,  justifyContent: 'center'}}>
                        <Text style={styles.headerCols}>Wisata Malam</Text>
                    </View>
                   <View style={{ flex: 2, flexDirection: 'row',  justifyContent: 'center',}}>
                        <View style={{ justifyContent: 'center'}}>
                             <Text style={styles.headerColsAll}>Lainnya</Text>
                        </View>
                        <View style={{ justifyContent: 'center'}}>       
                         <TouchableOpacity style={{  width:15 , height: 15,}} source={require('@images/next.png')} >                                    
                            <Image style={{  width:15 , height: 15,}} source={require('@images/next.png')} />    
                          </TouchableOpacity>                                   
                        </View>                             
                    </View>
            </View> 
            <Carousel 
              ref={(c5) => { this._carousel = c5; }}
              data={this.state.data}
              renderItem={this._renderItem.bind(this)}
              layout={'default'}
              firstItem={0}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableMomentum={true}  
            />

        </View> 
    </ScrollView>
        
      </View>
    );
  }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(viewportWidth / 2.6);
const ITEM_HORIZONTAL_MARGIN = 15;
const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
const SLIDER_WIDTH = viewportWidth;

const horizontalMargin = 10;
const verticalMargin = 10;
const slideWidth = 170;
const slideHeight = 170;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = slideHeight + verticalMargin * 2;

const styles = StyleSheet.create({
  headerCols: {
    fontSize: 18,
    color: systemWeights.reguler,
  },
  headerColsAll: {
    fontSize: 13,
    color: iOSColors.green,
    textAlign: 'right',
    paddingRight: 5,
  },
   slide: {
        width: itemWidth,
        height: itemHeight,
        paddingHorizontal: 10,
        paddingVertical: 10,   
    },
  container:{
    flex:1,
     backgroundColor: '#000000',
  },
  list: {
    paddingHorizontal: 10,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop:0,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 5,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 0,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 120,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
    marginHorizontal: 15,
    marginVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000'
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginHorizontal: 15,
    marginVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width:25,
    height:25,
  },
  iconLike: {
    width:40,
    height:40,    
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconComment: {
    width:40,
    height:40,    
    justifyContent: 'center',
    alignItems: 'center',
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    color: iOSColors.green,
    flex: 1,
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
   notificationBox: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  image:{
    width:45,
    height:45,
    borderRadius:40,
  },
 formContent:{
    flexDirection: 'row',
    marginTop:20,
    backgroundColor: '#1fba5d',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      borderBottomWidth: 1,
      height:30,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:10,
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