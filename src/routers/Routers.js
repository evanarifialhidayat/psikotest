import React, { Component } from 'react';
import {Router, Stack , Scene  } from 'react-native-router-flux';
import { StyleSheet, View ,Text} from 'react-native';


import  Login  from '@pages/Login';
import  Map  from '@pages/Map';
import  Signup  from '@signup/Signup';

import  Dasbord  from '@dasbord/Dasbord';

import { LIST_DASBOARD_CEK , LIST_DASBOARD_MENU_CEK } from '@pages/TypesAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Routers extends Component<{}>{ 
constructor(props){
    super(props)
 	   this.props.LIST_DASBOARD_CEK();
 	   this.props.LIST_DASBOARD_MENU_CEK();
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
						<Scene key="Dasbord" component={Dasbord} title="Dasbord" hideNavBar />							
					</Stack>
				</Router>			
			)
	}
}

const mapStateToProps = state => {
  return {
    LIST_DASBOARD_CEK_VALUE: state.reducerDasboardType,
    LIST_DASBOARD_MENU_CEK_VALUE: state.reducerDasboardMenuType,
  };
}



export default  connect(
						mapStateToProps,
									{   
										LIST_DASBOARD_CEK,
										LIST_DASBOARD_MENU_CEK
									}
				)(Routers);
