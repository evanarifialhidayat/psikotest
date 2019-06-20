import {
	FETCHING_PEOPLE_REQUEST,
	FETCHING_PEOPLE_REQUEST_suces,
	FETCHING_PEOPLE_REQUEST_eror,
	TT,
	LIST_DASBOARD,
	LIST_DASBOARD_MENU,	
	LIST_DASBOARD_SETTING,
	LIST_DASBOARD_MENU_SETTING
} from '@pages/Types';

import { combineReducers } from "redux";

const initialState = {
	isFeaatching : false,
	logingagal: '',
	loginsukses : ''
};
const initialStateNew = { 
	isFeaatchingw : false,
	buh : ''
};

const loginValidasi = (state = initialState , action) => {
	switch(action.type){
		case FETCHING_PEOPLE_REQUEST:
			return { ...state, isFeaatching:true };
		case FETCHING_PEOPLE_REQUEST_suces:
			return { ...state, isFeaatching: false, loginsukses: action.text };
		case FETCHING_PEOPLE_REQUEST_eror:
			return { ...state, isFeaatching: false, logingagal: action.text };
		default:
			return state;
	}
};

const tesx = (state = initialStateNew , action) => {
	switch(action.type){
		case TT:
			return { ...state, isFeaatchingw : false, buh: action.playlod }	;	
		default:
			return state;
	}
};

//List DASBOARD MENU
const initialStateDasbordMenu = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardMenu = (state = initialStateDasbordMenu, action) => {
	switch(action.type){
		case LIST_DASBOARD_MENU: 
			return {...state,isDataall: false, dataall: action.items};
		default:
			return state;
	}
}


//List DASBOARD
const initialStateDasbord = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboard = (state = initialStateDasbord, action) => {
	switch(action.type){
		case LIST_DASBOARD: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}


//List DASBOARD MENU
const initialStateDasbordMenuSetting = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardMenuSetting = (state = initialStateDasbordMenuSetting, action) => {
	switch(action.type){
		case LIST_DASBOARD_MENU_SETTING: 
			return {...state,isDataall: false, dataall: action.items};
		default:
			return state;
	}
}


//List DASBOARD
const initialStateDasbordSetting = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardSetting = (state = initialStateDasbordSetting, action) => {
	switch(action.type){
		case LIST_DASBOARD_SETTING: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}




const globalReducerSatu = combineReducers({  
//  loginValidasi: loginValidasi,
//  x: tesx,
  reducerDasboardType: reducerDasboard,
  reducerDasboardMenuType: reducerDasboardMenu,
  reducerDasboardSettingType: reducerDasboardSetting,
  reducerDasboardMenuSettingType: reducerDasboardMenuSetting,
});

export default globalReducerSatu;