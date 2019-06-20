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
 
//Dasboard Menu
export const LIST_DASBOARD_MENU_SETTING_GET = getlist => ({
		type    : LIST_DASBOARD_MENU_SETTING,
		items   : [ 
						{ thumbnail: {  uri : require('@images/search.png' ) ,         mulai: 'User' ,              buuton:'User'}},
						{ thumbnail: {  uri : require('@images/search.png' ) ,         mulai: 'Scan Barcode' ,              buuton:'Scan Barcode'}}
				 ],
});
export const LIST_DASBOARD_MENU_SETTING_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_MENU_SETTING_GET(ceklist));
	}
}


//Dasboard HEADER
export const LIST_DASBOARD_SETTING_GET = getlist => ({
		type    : LIST_DASBOARD_SETTING,
		playlod : [
	                {id:1, colsi: require('@images/c1.jpg'),kegunaan: "Ujian Masuk SD",  type : 'SD', penggunaan: "Digunakan Untuk Seleksi Masuk SD Dari Paud",   manfaat:'Fokus',like:'10',comment:'40',logo:'500'},
	                {id:2, colsi: require('@images/c2.jpg'),kegunaan: "Ujian Masuk SMP",  type : 'SMP', penggunaan: "Digunakan Untuk Seleksi Masuk SMP",  manfaat:'Nalar',like:'2',comment:'20',logo:'52'},
	                {id:3, colsi: require('@images/c3.jpg'),kegunaan: "Ujian Masuk SMA",  type : 'SMA',penggunaan: "Digunakan Untuk Seleksi Masuk SMA",   manfaat:'Monorik' ,like:'100',comment:'2',logo:'250'},
	                {id:4, colsi: require('@images/c4.jpg'),kegunaan: "Ujian Masuk TK",  type : 'TK',penggunaan: "Digunakan Untuk Seleksi Masuk TK",  manfaat:'IQ',like:'24',comment:'24',logo:'33'},
	                {id:5, colsi: require('@images/c5.jpg'),kegunaan: "Ujian Masuk CPNS",  type : 'CPNS',penggunaan: "Digunakan Untuk Seleksi Masuk CPNS",    manfaat:'Fokus',like:'33',comment:'120',logo:'44'},
	                {id:6, colsi: require('@images/c6.jpg'),kegunaan: "Ujian Masuk Profesonal",  type : 'Profesonal',penggunaan: "Digunakan Untuk Seleksi Masuk Profesonal",    manfaat:'Nalar',like:'1',comment:'60',logo:'553'},
	                {id:7, colsi: require('@images/c7.jpg'),kegunaan: "Versi Premium",  type : 'Premium',penggunaan: "Versi Premium Untuk Custum Modul",   manfaat:'Kesabaran' ,like:'9',comment:'80',logo:'77'},
	                {id:8, colsi: require('@images/c8.jpg'),kegunaan: "Ujian Masuk Perusahaan",  type : 'Perusahaan',penggunaan: "Digunakan Untuk Seleksi Masuk Perusahaan",   manfaat:'Numerik',like:'10',comment:'33',logo:'32'}
	              ],
});
export const LIST_DASBOARD_SETTING_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_SETTING_GET(ceklist));
	}
}





//Dasboard Menu
export const LIST_DASBOARD_MENU_GET = getlist => ({
		type    : LIST_DASBOARD_MENU,
		items   : [ 
						  { thumbnail: {  uri : require('@images/tk.png'   ) ,      mulai: 'TK' ,        buuton:'TK'} },
						  { thumbnail: {  uri : require('@images/sd.png'    ) ,      mulai: 'SD',        buuton:'SD'} },
						  { thumbnail: {  uri : require('@images/smp.png'      ) ,    mulai: 'SMP',      buuton:'SMP'} },
						  { thumbnail: {  uri : require('@images/sma.png' ) ,         mulai: 'SMA' ,          buuton:'SMA'}},
						  { thumbnail: {  uri : require('@images/s1.png' ) ,           mulai: 'S1' ,              buuton:'S1'}},
						  { thumbnail: {  uri : require('@images/cpns.png' ) ,          mulai: 'CPNS' ,              buuton:'CPNS'}},
						  { thumbnail: {  uri : require('@images/perusahaan.png' ) ,         mulai: 'Perusahaan' ,              buuton:'Perusahaan'}},
						  { thumbnail: {  uri : require('@images/kedo.png' ) ,         mulai: 'All Module' ,              buuton:'All Module'}},
						  { thumbnail: {  uri : require('@images/smart.png' ) ,         mulai: 'Versi Premium' ,              buuton:'Versi Premium'}},
						  { thumbnail: {  uri : require('@images/search.png' ) ,         mulai: 'Setting' ,              buuton:'Setting'}}
				 ],
});
export const LIST_DASBOARD_MENU_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_MENU_GET(ceklist));
	}
}


//Dasboard HEADER
export const LIST_DASBOARD_GET = getlist => ({
		type    : LIST_DASBOARD,
		playlod : [
	                {id:1, colsi: require('@images/c1.jpg'),kegunaan: "Ujian Masuk SD",  type : 'SD', penggunaan: "Digunakan Untuk Seleksi Masuk SD Dari Paud",   manfaat:'Fokus',like:'10',comment:'40',logo:'500'},
	                {id:2, colsi: require('@images/c2.jpg'),kegunaan: "Ujian Masuk SMP",  type : 'SMP', penggunaan: "Digunakan Untuk Seleksi Masuk SMP",  manfaat:'Nalar',like:'2',comment:'20',logo:'52'},
	                {id:3, colsi: require('@images/c3.jpg'),kegunaan: "Ujian Masuk SMA",  type : 'SMA',penggunaan: "Digunakan Untuk Seleksi Masuk SMA",   manfaat:'Monorik' ,like:'100',comment:'2',logo:'250'},
	                {id:4, colsi: require('@images/c4.jpg'),kegunaan: "Ujian Masuk TK",  type : 'TK',penggunaan: "Digunakan Untuk Seleksi Masuk TK",  manfaat:'IQ',like:'24',comment:'24',logo:'33'},
	                {id:5, colsi: require('@images/c5.jpg'),kegunaan: "Ujian Masuk CPNS",  type : 'CPNS',penggunaan: "Digunakan Untuk Seleksi Masuk CPNS",    manfaat:'Fokus',like:'33',comment:'120',logo:'44'},
	                {id:6, colsi: require('@images/c6.jpg'),kegunaan: "Ujian Masuk Profesonal",  type : 'Profesonal',penggunaan: "Digunakan Untuk Seleksi Masuk Profesonal",    manfaat:'Nalar',like:'1',comment:'60',logo:'553'},
	                {id:7, colsi: require('@images/c7.jpg'),kegunaan: "Versi Premium",  type : 'Premium',penggunaan: "Versi Premium Untuk Custum Modul",   manfaat:'Kesabaran' ,like:'9',comment:'80',logo:'77'},
	                {id:8, colsi: require('@images/c8.jpg'),kegunaan: "Ujian Masuk Perusahaan",  type : 'Perusahaan',penggunaan: "Digunakan Untuk Seleksi Masuk Perusahaan",   manfaat:'Numerik',like:'10',comment:'33',logo:'32'}
	              ],
});
export const LIST_DASBOARD_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_GET(ceklist));
	}
}













export const featchingPeaopleRequest = () => ({type: FETCHING_PEOPLE_REQUEST});

export const featchingPeaopleRequest_suc = json => ({
	type: FETCHING_PEOPLE_REQUEST_suces,
	text: json
});
export const featchingPeaopleRequest_ero = eror =>({
	type: FETCHING_PEOPLE_REQUEST_eror,
	text: eror
});
export const ceka = j => ({
	type: TT,
	playlod : j
});

export const getDataLogin = (user,pass) => {
	return async dispatch => {
		dispatch(featchingPeaopleRequest());
		try{
		    // let response = await fetch("https://api-mobile-evan.herokuapp.com/customers2/getlogin/adminApr/adminApr");
		    // let json  = await response.json();
		    // dispatch(featchingPeaopleRequest_suc(JSON.stringify(json.results)));		 
  					let response = await fetch("https://api-mobile-evan.herokuapp.com/customers2/getlogin/"+user+"/"+pass)
		     		.then( res => res.json())
		     		.then(
			     			(result) => {
			     				dispatch(featchingPeaopleRequest_suc(JSON.stringify(result)));
			     			},(error) => {
			     				dispatch(featchingPeaopleRequest_ero(JSON.stringify(error)));
			     			}               
		     		)	    	     

	 	 }catch(error){
	 	 		dispatch(featchingPeaopleRequest_ero(error));
		}	
	}
}

export const cekData = (ss) => {
	return dispatch => {
		dispatch(ceka("Evan Arifial Hidayat"));
	}
}
