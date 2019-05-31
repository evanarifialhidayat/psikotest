import React, { Component } from 'react';
import {Router, Stack , Scene  } from 'react-native-router-flux';
import { StyleSheet, View ,Text} from 'react-native';


import  Login  from '@pages/Login';
import  Map  from '@pages/Map';
import  Signup  from '@signup/Signup';
import  Makanan  from '@warung/Makanan';
import  MakananDetail  from '@warung/MakananDetail';
import  Dasbord  from '@dasbord/Dasbord';
import  Minuman  from '@warung/Minuman';
import  MinumanDetail  from '@warung/MinumanDetail';

import { LIST_PRODUCT_PREORITAS_CEK , LIST_MAKANAN_CEK , LIST_MINUMAN_CEK,LIST_DASBOARD_CEK} from '@pages/TypesAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//const RouterWithRedux = connect()(Router)
class Routers extends Component<{}>{
constructor(props){
    super(props)
    // setTimeout(() => {
 	   this.props.LIST_PRODUCT_PREORITAS_CEK();  
 	   this.props.LIST_MAKANAN_CEK();
 	   this.props.LIST_MINUMAN_CEK();
 	   this.props.LIST_DASBOARD_CEK();
 	   //console.log('Hi roter f routers routers = '+this.props.LIST_PRODUCT_PREORITAS_CEK_VALUE.dataall);
  //	 },2000);   
}
  componentWillMount(){
	
}
  componentDidMount() {  
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);    
   }
	render(){
		return(			
				<Router  >
					<Stack key="root"   >
						<Scene key="Login" component={Login} title="Login" initial={true} hideNavBar />	
						<Scene key="Map" component={Map} title="Map" hideNavBar />	
						<Scene key="Signup" component={Signup} title="Signup" hideNavBar />	
						<Scene key="Makanan" component={Makanan} title="Makanan" hideNavBar />	
						<Scene key="Dasbord" component={Dasbord} title="Dasbord" hideNavBar />	
						<Scene key="Minuman" component={Minuman} title="Minuman" hideNavBar />	
						<Scene key="MakananDetail" component={MakananDetail} title="MakananDetail" hideNavBar />	
						<Scene key="MinumanDetail" component={MinumanDetail} title="MinumanDetail" hideNavBar />	
						
					</Stack>
				</Router>			
			)
	}
}

const mapStateToProps = state => {
  return {
    LIST_PRODUCT_PREORITAS_CEK_VALUE: state.reducerProdType,
    LIST_MAKANAN_CEK_VALUE: state.reducerMakananType,
    LIST_MINUMAN_CEK_VALUE: state.reducerMinumanType,
    LIST_DASBOARD_CEK_VALUE: state.reducerDasboardType,
  };
}



export default  connect(
						mapStateToProps,
									{   LIST_PRODUCT_PREORITAS_CEK , 
										LIST_MAKANAN_CEK , 
										LIST_MINUMAN_CEK,
										LIST_DASBOARD_CEK
									}
				)(Routers);
