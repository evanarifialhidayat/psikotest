import React, { Component } from 'react';
import {Router, Stack , Scene  } from 'react-native-router-flux';
import { StyleSheet, View ,Text,Alert} from 'react-native';


import  Login  from '@pages/Login';
import  Map  from '@pages/Map';
import  Signup  from '@signup/Signup';

import  Dasbord  from '@dasbord/Dasbord';
import  DasbordSetting  from '@dasbord/DasbordSetting';
import  DasbordTk from '@dasbord/DasbordTk';
import  DasbordSD from '@dasbord/DasbordSD';
import  DasbordSMP from '@dasbord/DasbordSMP';
import  DasbordSMA from '@dasbord/DasbordSMA';
import  DasbordS1 from '@dasbord/DasbordS1';
import  DasbordCPNS from '@dasbord/DasbordCPNS';
import  DasbordPROF from '@dasbord/DasbordPROF';

import  Scan  from '@setting/Scan';
import  User  from '@setting/User';

import { 
		 LIST_DASBOARD_CEK ,
		 LIST_DASBOARD_MENU_CEK , 
		 LIST_DASBOARD_SETTING_CEK ,
		 LIST_DASBOARD_MENU_SETTING_CEK,
		 LIST_ROUTER_CEK,
		 LIST_DASBOARD_TK_CEK,
		 LIST_DASBOARD_MENU_TK_CEK,
		 LIST_DASBOARD_SD_CEK,
		 LIST_DASBOARD_MENU_SD_CEK,
		 LIST_DASBOARD_SMP_CEK,
		 LIST_DASBOARD_MENU_SMP_CEK,
		 LIST_DASBOARD_SMA_CEK,
		 LIST_DASBOARD_MENU_SMA_CEK,
		 LIST_DASBOARD_S1_CEK,
		 LIST_DASBOARD_MENU_S1_CEK,
		 LIST_DASBOARD_CPNS_CEK,
		 LIST_DASBOARD_MENU_CPNS_CEK,
		 LIST_DASBOARD_PROF_CEK,
		 LIST_DASBOARD_MENU_PROF_CEK
	   } from '@pages/TypesAction';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Routers extends Component<{}>{ 
constructor(props){
    super(props)
 	   this.props.LIST_DASBOARD_CEK();
 	   this.props.LIST_DASBOARD_MENU_CEK(); 
 	   this.props.LIST_DASBOARD_SETTING_CEK();
 	   this.props.LIST_DASBOARD_MENU_SETTING_CEK(); 
 	   this.props.LIST_ROUTER_CEK();
 	   this.props.LIST_DASBOARD_TK_CEK();
 	   this.props.LIST_DASBOARD_MENU_TK_CEK(); 
 	   this.props.LIST_DASBOARD_SD_CEK();
 	   this.props.LIST_DASBOARD_MENU_SD_CEK(); 
 	   this.props.LIST_DASBOARD_SMP_CEK();
 	   this.props.LIST_DASBOARD_MENU_SMP_CEK();
 	   this.props.LIST_DASBOARD_SMA_CEK();
 	   this.props.LIST_DASBOARD_MENU_SMA_CEK();
 	   this.props.LIST_DASBOARD_S1_CEK();
 	   this.props.LIST_DASBOARD_MENU_S1_CEK();
 	   this.props.LIST_DASBOARD_CPNS_CEK();
 	   this.props.LIST_DASBOARD_MENU_CPNS_CEK();
 	   this.props.LIST_DASBOARD_PROF_CEK();
 	   this.props.LIST_DASBOARD_MENU_PROF_CEK();     
}
  componentWillMount(){}
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
						<Scene key="DasbordSetting" component={DasbordSetting} title="DasbordSetting" hideNavBar />			
						<Scene key="Scan" component={Scan} title="Scan" hideNavBar />		
						<Scene key="User" component={User} title="User" hideNavBar />	
						<Scene key="DasbordTk" component={DasbordTk} title="DasbordTk" hideNavBar />			
						<Scene key="DasbordSD" component={DasbordSD} title="DasbordSD" hideNavBar />	
						<Scene key="DasbordSMP" component={DasbordSMP} title="DasbordSMP" hideNavBar />	
						<Scene key="DasbordSMA" component={DasbordSMA} title="DasbordSMA" hideNavBar />	
						<Scene key="DasbordS1" component={DasbordS1} title="DasbordS1" hideNavBar />	
						<Scene key="DasbordCPNS" component={DasbordCPNS} title="DasbordCPNS" hideNavBar />	
						<Scene key="DasbordPROF" component={DasbordPROF} title="DasbordPROF" hideNavBar />									
					</Stack>
				</Router>			
			)
	}
}

const mapStateToProps = state => {
  return {
    LIST_DASBOARD_CEK_VALUE: state.reducerDasboardType,
    LIST_DASBOARD_MENU_CEK_VALUE: state.reducerDasboardMenuType,
    LIST_DASBOARD_SETTING_CEK_VALUE: state.reducerDasboardSettingType,
    LIST_DASBOARD_MENU_SETTING_CEK_VALUE: state.reducerDasboardMenuSettingType,
    LIST_ROUTER_CEK_VALUE: state.reducerListRouterType,
    LIST_DASBOARD_TK_CEK_VALUE: state.reducerDasboardTkType,
    LIST_DASBOARD_MENU_TK_CEK_VALUE: state.reducerDasboardMenuTkType,
    LIST_DASBOARD_SD_CEK_VALUE: state.reducerDasboardSDType,
    LIST_DASBOARD_MENU_SD_CEK_VALUE: state.reducerDasboardMenuSDType,
    LIST_DASBOARD_SMP_CEK_VALUE: state.reducerDasboardSMPType,
    LIST_DASBOARD_MENU_SMP_CEK_VALUE: state.reducerDasboardMenuSMPType,
    LIST_DASBOARD_SMA_CEK_VALUE: state.reducerDasboardSMAType,
    LIST_DASBOARD_MENU_SMA_CEK_VALUE: state.reducerDasboardMenuSMAType,
    LIST_DASBOARD_S1_CEK_VALUE: state.reducerDasboardS1Type,
    LIST_DASBOARD_MENU_S1_CEK_VALUE: state.reducerDasboardMenuS1Type,
    LIST_DASBOARD_CPNS_CEK_VALUE: state.reducerDasboardCPNSType,
    LIST_DASBOARD_MENU_CPNS_CEK_VALUE: state.reducerDasboardMenuCPNSType,
    LIST_DASBOARD_PROF_CEK_VALUE: state.reducerDasboardPROFType,
    LIST_DASBOARD_MENU_PROF_CEK_VALUE: state.reducerDasboardMenuPROFType,
  };
}



export default  connect(
						mapStateToProps,
									{   
										LIST_DASBOARD_CEK,
										LIST_DASBOARD_MENU_CEK,
										LIST_DASBOARD_SETTING_CEK,
										LIST_DASBOARD_MENU_SETTING_CEK,
										LIST_ROUTER_CEK,
										LIST_DASBOARD_TK_CEK,
										LIST_DASBOARD_MENU_TK_CEK,										
										LIST_DASBOARD_SD_CEK,
										LIST_DASBOARD_MENU_SD_CEK,									
										LIST_DASBOARD_SMP_CEK,
										LIST_DASBOARD_MENU_SMP_CEK,									
										LIST_DASBOARD_SMA_CEK,
										LIST_DASBOARD_MENU_SMA_CEK,									
										LIST_DASBOARD_S1_CEK,
										LIST_DASBOARD_MENU_S1_CEK,							
										LIST_DASBOARD_CPNS_CEK,
										LIST_DASBOARD_MENU_CPNS_CEK,							
										LIST_DASBOARD_PROF_CEK,
										LIST_DASBOARD_MENU_PROF_CEK,
									}
				)(Routers);




	