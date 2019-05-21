import React, { Component } from 'react';
import {Router, Stack , Scene  } from 'react-native-router-flux';

import { StyleSheet, View ,Text} from 'react-native';


import  Login  from '@pages/Login';
import  Map  from '@pages/Map';
import { connect } from 'react-redux';
import  Signup  from '@signup/Signup';
import  Makanan  from '@warung/Makanan';
import  MakananDetail  from '@warung/MakananDetail';
import  Dasbord  from '@dasbord/Dasbord';
import  Minuman  from '@warung/Minuman';


//const RouterWithRedux = connect()(Router)
export default class Routers extends Component<{}>{
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
					</Stack>
				</Router>			
			)
	}
}
