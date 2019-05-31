import {
	FETCHING_PEOPLE_REQUEST,
	FETCHING_PEOPLE_REQUEST_suces,
	FETCHING_PEOPLE_REQUEST_eror,
	TT,
	LIST_PRODUCT_PREORITAS,
	LIST_MAKANAN,
	LIST_MINUMAN,
	LIST_DASBOARD
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

//List MINUMAN
const initialStateMinuman = { 
	isDataall: false,
	dataall :[],
};
const reducerMinuman = (state = initialStateMinuman, action) => {
	switch(action.type){
		case LIST_MINUMAN: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}

//List MAKANAN
const initialStateMakanan = { 
	isDataall: false,
	dataall :[],
};
const reducerMakanan = (state = initialStateMakanan, action) => {
	switch(action.type){
		case LIST_MAKANAN: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}

//Product Prioritas
const initialStateProd = { 
	isDataall: false,
	dataall :[],
};
const reducerProd = (state = initialStateProd, action) => {
	switch(action.type){
		case LIST_PRODUCT_PREORITAS: 
			return {...state,isDataall: false, dataall: action.playlod};
		default:
			return state;
	}
}


const globalReducerSatu = combineReducers({  
//  loginValidasi: loginValidasi,
//  x: tesx,
  reducerProdType : reducerProd,
  reducerMakananType  : reducerMakanan,
  reducerMinumanType : reducerMinuman,
  reducerDasboardType: reducerDasboard,
});

export default globalReducerSatu;