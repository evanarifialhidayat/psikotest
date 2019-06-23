import {
	FETCHING_PEOPLE_REQUEST,
	FETCHING_PEOPLE_REQUEST_suces,
	FETCHING_PEOPLE_REQUEST_eror,
	TT,
	LIST_DASBOARD,
	LIST_DASBOARD_MENU,	
	LIST_DASBOARD_SETTING,
	LIST_DASBOARD_MENU_SETTING,
	LIST_ROUTER,
	LIST_DASBOARD_TK,
	LIST_DASBOARD_MENU_TK,
	LIST_DASBOARD_SD,
	LIST_DASBOARD_MENU_SD,
	LIST_DASBOARD_SMP,
	LIST_DASBOARD_MENU_SMP,
	LIST_DASBOARD_SMA,
	LIST_DASBOARD_MENU_SMA,
	LIST_DASBOARD_S1,
	LIST_DASBOARD_MENU_S1,
	LIST_DASBOARD_CPNS,
	LIST_DASBOARD_MENU_CPNS,
	LIST_DASBOARD_PROF,
	LIST_DASBOARD_MENU_PROF
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


//List DASBOARD SETTING MENU
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


//List DASBOARD SETTING
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


//List DASBOARD
const initialListRouters = { 
	isDataall: false,
	dataall :[],
};
const reducerListRouter = (state = initialListRouters, action) => {
	switch(action.type){
		case LIST_ROUTER: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}


//List DASBOARD TK MENU
const initialStateDasbordMenuTk = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardMenuTk = (state = initialStateDasbordMenuTk, action) => {
	switch(action.type){
		case LIST_DASBOARD_MENU_TK: 
			return {...state,isDataall: false, dataall: action.items};
		default:
			return state;
	}
}

//List DASBOARD TK
const initialStateDasbordTk = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardTk = (state = initialStateDasbordTk, action) => {
	switch(action.type){
		case LIST_DASBOARD_TK: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}

//List DASBOARD SD MENU
const initialStateDasbordMenuSD = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardMenuSD = (state = initialStateDasbordMenuSD, action) => {
	switch(action.type){
		case LIST_DASBOARD_MENU_SD: 
			return {...state,isDataall: false, dataall: action.items};
		default:
			return state;
	}
}

//List DASBOARD SD
const initialStateDasbordSD = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardSD = (state = initialStateDasbordSD, action) => {
	switch(action.type){
		case LIST_DASBOARD_SD: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}

//List DASBOARD SMP MENU
const initialStateDasbordMenuSMP = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardMenuSMP = (state = initialStateDasbordMenuSMP, action) => {
	switch(action.type){
		case LIST_DASBOARD_MENU_SMP: 
			return {...state,isDataall: false, dataall: action.items};
		default:
			return state;
	}
}

//List DASBOARD SMP
const initialStateDasbordSMP = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardSMP = (state = initialStateDasbordSMP, action) => {
	switch(action.type){
		case LIST_DASBOARD_SMP: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}

//List DASBOARD SMA MENU
const initialStateDasbordMenuSMA = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardMenuSMA = (state = initialStateDasbordMenuSMA, action) => {
	switch(action.type){
		case LIST_DASBOARD_MENU_SMA: 
			return {...state,isDataall: false, dataall: action.items};
		default:
			return state;
	}
}

//List DASBOARD SMA
const initialStateDasbordSMA = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardSMA = (state = initialStateDasbordSMA, action) => {
	switch(action.type){
		case LIST_DASBOARD_SMA: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}

//List DASBOARD S1 MENU
const initialStateDasbordMenuS1 = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardMenuS1 = (state = initialStateDasbordMenuS1, action) => {
	switch(action.type){
		case LIST_DASBOARD_MENU_S1: 
			return {...state,isDataall: false, dataall: action.items};
		default:
			return state;
	}
}

//List DASBOARD S1
const initialStateDasbordS1 = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardS1 = (state = initialStateDasbordS1, action) => {
	switch(action.type){
		case LIST_DASBOARD_S1: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}

//List DASBOARD CPNS MENU
const initialStateDasbordMenuCPNS = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardMenuCPNS = (state = initialStateDasbordMenuCPNS, action) => {
	switch(action.type){
		case LIST_DASBOARD_MENU_CPNS: 
			return {...state,isDataall: false, dataall: action.items};
		default:
			return state;
	}
}

//List DASBOARD CPNS
const initialStateDasbordCPNS = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardCPNS = (state = initialStateDasbordCPNS, action) => {
	switch(action.type){
		case LIST_DASBOARD_CPNS: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}

//List DASBOARD PROF MENU
const initialStateDasbordMenuPROF = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardMenuPROF = (state = initialStateDasbordMenuPROF, action) => {
	switch(action.type){
		case LIST_DASBOARD_MENU_PROF: 
			return {...state,isDataall: false, dataall: action.items};
		default:
			return state;
	}
}

//List DASBOARD PROF
const initialStateDasbordPROF = { 
	isDataall: false,
	dataall :[],
};
const reducerDasboardPROF = (state = initialStateDasbordPROF, action) => {
	switch(action.type){
		case LIST_DASBOARD_PROF: 
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
  reducerListRouterType: reducerListRouter,
  reducerDasboardTkType: reducerDasboardTk,
  reducerDasboardMenuTkType: reducerDasboardMenuTk,
  reducerDasboardSDType: reducerDasboardSD,
  reducerDasboardMenuSDType: reducerDasboardMenuSD,
  reducerDasboardSMPType: reducerDasboardSMP,
  reducerDasboardMenuSMPType: reducerDasboardMenuSMP,
  reducerDasboardSMAType: reducerDasboardSMA,
  reducerDasboardMenuSMAType: reducerDasboardMenuSMA,
  reducerDasboardS1Type: reducerDasboardS1,
  reducerDasboardMenuS1Type: reducerDasboardMenuS1,
  reducerDasboardCPNSType: reducerDasboardCPNS,
  reducerDasboardMenuCPNSType: reducerDasboardMenuCPNS,
  reducerDasboardPROFType: reducerDasboardPROF,
  reducerDasboardMenuPROFType: reducerDasboardMenuPROF,
});

export default globalReducerSatu;