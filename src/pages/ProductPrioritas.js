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
import Placeholder, { Line , Media } from "rn-placeholder";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProductPrioritas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: '',
      isReady: false, 
      setReady: false
    };

   //  console.log('Hi roter f routers Prioritas = '+this.props.LIST_PRODUCT_PREORITAS_CEK_VALUE.dataall);
    if(this.state.isReady == false){
        setInterval(
          () => this.setState({ isReady: true}),
          3000
        );
        setInterval(
          () => this.setState({ setReady: true }),
          3000
        );
      }
  }
  
  onPresMakanan(type,id){
    // Alert.alert(type+'ss'+id);
    // return false;
    id = "2";
   if(type === "REDMORE"){
     Actions.Dasbord(); 
   }else if(type === "Makanan"){
     Actions.MakananDetail({idwarung: id});
   }else if(type === "Minuman"){
     Actions.MinumanDetail({idwarung: id});
   }   
  }

  componentDidMount() {}


_renderItem ({item, index}) {
  const prioritasvariabel = item.id;  
  const ComponentLoaded = () => 
      <TouchableOpacity  style={{borderRadius:10,flex: 1,alignSelf: 'stretch'}} source={item.colsimage}
                                                              onPress={this.onPresMakanan.bind(this,item.type,item.id)}
                                                            >     
                                                                 <ImageBackground  style={{borderRadius:10,flex: 1,alignSelf: 'stretch'}} source={item.colsimage} />                     
                                                                            <View style={{flexDirection: 'row'}}>
                                                                                <Text style={material.body2 ,{ flex: 2 }}>{item.name}</Text>                                    
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
      ;

      const ComponentLoadedElse = () => 
                            <TouchableOpacity  style={{borderRadius:10,flex: 1,alignSelf: 'stretch'}} source={item.colsimage}
                                              onPress={this.onPresMakanan.bind(this,item.id)}
                                          >     
                                           <ImageBackground  style={{borderRadius:10,flex: 1,alignSelf: 'stretch'}} source={item.colsimage} />                     
                                            <View style={{flexDirection: 'row' ,justifyContent: 'center', alignItems: 'center',}}>
                                                <Text >
                                                        Lainnya
                                                </Text>                                    
                                             </View>                                                           
                                    </TouchableOpacity>        
      ;
        return (
            <View style={styles.slide}>    
              {
                prioritasvariabel !== "0999" ?
                            <Placeholder
                                    isReady={this.state.isReady}
                                    size={60}
                                    animate="fade"
                                    lineNumber={4}
                                    lineSpacing={5}
                                    lastLineWidth="30%"    
                                    whenReadyRender={() => 
                                              <ComponentLoaded />
                                      }                                
                                  >
                                        <Line width="70%" style={{backgroundColor:'rgba(25,25,25,0.3)'}}/>
                                        <Line style={{backgroundColor:'rgba(25,25,25,0.3)'}}/>
                                        <Line style={{backgroundColor:'rgba(25,25,25,0.3)'}}/>
                                        <Line width="30%" style={{backgroundColor:'rgba(25,25,25,0.3)'}}/>
                                      </Placeholder>
                   : 
                          <Placeholder
                                    isReady={this.state.isReady}
                                    size={60}
                                    animate="fade"
                                    lineNumber={4}
                                    lineSpacing={5}
                                    lastLineWidth="30%"    
                                    whenReadyRender={() => 
                                              <ComponentLoadedElse />
                                      }                                
                                  >
                                        <Line width="70%" />
                                        <Line />
                                        <Line />
                                        <Line width="30%" />
                                      </Placeholder> 
            }                
        </View>
        );
    }

  render() {   
    return (
         <Carousel 
              ref={(c1) => { this._carousel = c1; }}
              data={this.props.LIST_PRODUCT_PREORITAS_CEK_VALUE.dataall}
              renderItem={this._renderItem.bind(this)}
              layout={'default'}
              firstItem={0}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              activeSlideAlignment={'start'}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              enableMomentum={true}   
              loop={true}
              loopClonesPerSide={3}
              autoplay={true}
              autoplayDelay={2000}
              autoplayInterval={3000}      
            />
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
    fontSize: 12,
    color: systemWeights.reguler,
  },
  headerColsAll: {
    fontSize: 12,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
  },
  list: {
    paddingHorizontal: 10,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop:0,
  },
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



const mapStateToProps = state => {
  return {
    LIST_PRODUCT_PREORITAS_CEK_VALUE: state.reducerProdType
  };
}



export default  connect(mapStateToProps)(ProductPrioritas);