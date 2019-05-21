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
  TextInput
} from 'react-native';

export default class Minuman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, foto: require('@images/1.jpg' )  , name: "Mba Epi",             jarak:"1 KM",    image:require('@images/m1.jpg' ) },
        {id:2, foto: require('@images/2.jpg' )  , name: "Mba Rrna",             jarak:"2 KM", image:require('@images/m2.jpg' ) },
        {id:3, foto: require('@images/3.jpg' )  , name: "Mba Tati ",            jarak:"3 KM",   image:require('@images/m3.jpg' ) },
        {id:4, foto: require('@images/4.jpg' )  , name: "Warung Bu Slamet",         jarak:"4 KM",  image:require('@images/m4.jpg' ) },
        {id:5, foto: require('@images/5.jpg' )  , name: "Mba Wah",           jarak:"5 KM",   image:require('@images/m5.jpg' ) },
        {id:6, foto: require('@images/6.jpg' )  , name: "Mba Mian",        jarak:"6 KM",    image:require('@images/m6.jpg' ) },
        {id:7, foto: require('@images/7.jpg' )  , name: "Warung Bu Yunus",    jarak:"7 KM",image:require('@images/m7.jpg' ) },
        {id:8, foto: require('@images/8.jpg' )  , name: "Angkringan Abu",          jarak:"8 KM",   image:require('@images/m8.jpg' ) },
        {id:9, foto: require('@images/9.jpg' )  , name: "Felis", jarak:"9 KM", image:require('@images/m9.jpg' ) },
      ],
      makanan: '',
    };
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
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>               
               <View style={styles.cardHeader}>                   
		             <Image style={styles.image}  source={item.foto}/>		                
		             <Text style={styles.title}>{item.name}</Text>
                     <Text style={styles.time}>{item.jarak}</Text>
                </View>
                <Image style={styles.cardImage} source={item.image}/>
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon}  source={require('@images/like.png')}/>
                        <Text style={styles.socialBarLabel}>78</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon}  source={require('@images/logo.png')}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon}  source={require('@images/comment.png')}/>
                        <Text rkType='primary4 hintColor' style={styles.socialBarLabel}>13</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
     backgroundColor: '#191111',
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
      borderRadius:30,
      borderBottomWidth: 1,
      height:37,
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