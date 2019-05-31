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
 

//Product Dasboard
export const LIST_DASBOARD_GET = getlist => ({
		type    : LIST_DASBOARD,
		playlod : [
	                {id:1, colsi: require('@images/c1.jpg'),namemakanan: "Nasi Goreng",  namewarung : 'Warung Bu Mian', alamat: "Jln. Jendral Sudirman No.34 Depan SMA",  namaproduct: 'Nasi Goreng',  jarak:'9 KM', harga:'Rp 10.000',like:'10',comment:'40',logo:'500'},
	                {id:2, colsi: require('@images/c2.jpg'),namemakanan: "Nasi Uduk",  namewarung : 'Warung Bu Takbir', alamat: "Jln. Jendral Sudirman No.34 Depan SMA",  namaproduct: 'Nasi Kebuli',  jarak:'19 KM', harga:'Rp 12.000',like:'2',comment:'20',logo:'52'},
	                {id:3, colsi: require('@images/c3.jpg'),namemakanan: "Nasi Kebuli",  namewarung : 'Warung Bu Budi',alamat: "Jln. Jendral Sudirman No.34 Depan SMA",   namaproduct: 'Empal Gentong',  jarak:'5 KM', harga:'Rp 15.000' ,like:'100',comment:'2',logo:'250'},
	                {id:4, colsi: require('@images/c4.jpg'),namemakanan: "Nasi Enak",  namewarung : 'Warung Bu Siti',alamat: "Jln. Jendral Sudirman No.34 Depan SMA",   namaproduct: 'Telor Ceplok' ,  jarak:'7 KM', harga:'Rp 14.000',like:'24',comment:'24',logo:'33'},
	                {id:5, colsi: require('@images/c5.jpg'),namemakanan: "Nasi Kuning",  namewarung : 'Warung Bu Desi',alamat: "Jln. Jendral Sudirman No.34 Depan SMA",   namaproduct: 'Kentang Goreng' ,  jarak:'3 KM', harga:'Rp 117.000',like:'33',comment:'120',logo:'44'},
	                {id:6, colsi: require('@images/c6.jpg'),namemakanan: "Nasi Goreng",  namewarung : 'Warung Kopi',alamat: "Jln. Jendral Sudirman No.34 Depan SMA",   namaproduct: 'Jajanan Malam' ,  jarak:'1 KM', harga:'Rp 153.000',like:'1',comment:'60',logo:'553'},
	                {id:7, colsi: require('@images/c7.jpg'),namemakanan: "Nasi Bagong",  namewarung : 'Warung Pak Ndut',alamat: "Jln. Jendral Sudirman No.34 Depan SMA",   namaproduct: 'Nasi Betawi',  jarak:'10 KM', harga:'Rp 15.000' ,like:'9',comment:'80',logo:'77'},
	                {id:8, colsi: require('@images/c8.jpg'),namemakanan: "Nasi Putih",  namewarung : 'Warung Pak Mirsun',alamat: "Jln. Jendral Sudirman No.34 Depan SMA",   namaproduct: 'Kangkung',  jarak:'2 KM', harga:'Rp 1.000',like:'10',comment:'33',logo:'32'}
	              ],
});
export const LIST_DASBOARD_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_GET(ceklist));
	}
}

//Product Makanan
export const LIST_MINUMAN_GET = getlist => ({
		type    : LIST_MINUMAN,
		playlod : [
			        {id:1, harga:"Rp. 110.000", name: "Warung Bu Jarwo",   jenis: "Makanan Tradisonal", nameminuman: "Extra Joss",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA",   jarak:"1 KM", colsimage:require('@images/m1.jpg') , jarak:'9 KM',like:'10',comment:'40',logo:'500' },
			        {id:2, harga:"Rp. 20.000", name: "Warung Bu Ida",      jenis: "Makanan Melenial",  nameminuman: "Kuku Bima",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA",  jarak:"2 KM", colsimage:require('@images/m2.jpg' ) ,jarak:'19 KM' ,like:'2',comment:'20',logo:'52'},
			        {id:3, harga:"Rp. 5.000",  name: "Warung Bu Gureng ",  jenis: "Jajanan Tradisonal",  nameminuman: "Es Jeruk",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA",  jarak:"3 KM", colsimage:require('@images/m3.jpg' ),jarak:'5 KM', like:'100',comment:'2',logo:'250'},
			        {id:4, harga:"Rp. 11.000", name: "Warung Bu Slamet",   jenis: "Makanan Tradisonal",  nameminuman: "Es Campur",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA",  jarak:"4 KM", colsimage:require('@images/m4.jpg' ), jarak:'7 KM',like:'24',comment:'24',logo:'33'},
			        {id:5, harga:"Rp. 14.000", name: "Mba Wah",            jenis: "Makanan Melenial",  nameminuman: "Sucang",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA",  jarak:"5 KM", colsimage:require('@images/m5.jpg' ),jarak:'19 KM',like:'10',comment:'40',logo:'50'},
			        {id:6, harga:"Rp. 13.000", name: "Warung Bu Erlin",    jenis: "Jajanan Tradisonal",   nameminuman: "Susu Segar Dingin",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA", jarak:"6 KM", colsimage:require('@images/m6.jpg' ),jarak:'29 KM',like:'10',comment:'40',logo:'700'},
			        {id:7, harga:"Rp. 15.000", name: "Warung Bu Yunus",    jenis: "Makanan Melenial",   nameminuman: "Cola Cola",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA", jarak:"7 KM", colsimage:require('@images/m7.jpg' ),jarak:'39 KM',like:'10',comment:'40',logo:'800'},
			        {id:8, harga:"Rp. 9.000",  name: "Ridiculus mus",      jenis: "Jajanan Tradisonal",   nameminuman: "Sprite",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA", jarak:"8 KM", colsimage:require('@images/m8.jpg' ),jarak:'49 KM',like:'10',comment:'40',logo:'900'},
			        {id:9, harga:"Rp. 19.000", name: "Felis",              jenis: "Makanan Melenial",   nameminuman: "Fanta",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA", jarak:"9 KM", colsimage:require('@images/m9.jpg' ),jarak:'59 KM',like:'10',comment:'40',logo:'100'},
			      ]
});
export const LIST_MINUMAN_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_MINUMAN_GET(ceklist));
	}
}


//Product Makanan
export const LIST_MAKANAN_GET = getlist => ({
		type    : LIST_MAKANAN,
		playlod : [
        {id:1, harga:"Rp. 10.000",  name: "Warung Bu Jarwo",  jenis: "Minuman Tradisonal",  namemakanan: "Nasi Goreng",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA",    jarak:"1 KM"   , colsimage:require('@images/c1.jpg' ), jarak:'19 KM',like:'10',comment:'40',logo:'500'},
        {id:2, harga:"Rp. 20.000",  name: "Warung Bu Ida",    jenis: "Minuman Melenial",  namemakanan: "Nasi Kebuli",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA",   jarak:"2 KM",      colsimage:require('@images/c2.jpg' ), jarak:'29 KM',like:'10',comment:'40',logo:'500'},
        {id:3, harga:"Rp. 5.000",  name: "Warung Bu Gureng ",  jenis: "Minuman Unik Tradisonal", namemakanan: "Nasi Jagung",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA",     jarak:"3 KM",   colsimage:require('@images/c3.jpg' ), jarak:'39 KM',like:'10',comment:'40',logo:'500'},
        {id:4, harga:"Rp. 11.000", name: "Warung Bu Slamet",   jenis: "Minuman Tradisonal", namemakanan: "Sayur Lodeh",     alamat: "Jln. Jendral Sudirman No.34 Depan SMA", jarak:"4 KM",       colsimage:require('@images/c4.jpg' ), jarak:'49 KM',like:'10',comment:'40',logo:'500'},
        {id:5, harga:"Rp. 14.000", name: "Mba Wah",           jenis: "Minuman Unik Tradisonal",  namemakanan: "Sayur Enak",      alamat: "Jln. Jendral Sudirman No.34 Depan SMA", jarak:"5 KM",              colsimage:require('@images/c5.jpg' ), jarak:'59 KM',like:'10',comment:'40',logo:'500'},
        {id:6, harga:"Rp. 13.000", name: "Warung Bu Erlin",   jenis: "Minuman Melenial",  namemakanan: "Enek Bgd",    alamat: "Jln. Jendral Sudirman No.34 Depan SMA", jarak:"6 KM",         colsimage:require('@images/c6.jpg' ), jarak:'69 KM',like:'10',comment:'40',logo:'500'},
        {id:7, harga:"Rp. 15.000", name: "Warung Bu Yunus",   jenis: "Minuman Unik Tradisonal",  namemakanan: "Nasi Kunig",  alamat: "Jln. Jendral Sudirman No.34 Depan SMA",   jarak:"7 KM",             colsimage:require('@images/c7.jpg' ), jarak:'79 KM',like:'10',comment:'40',logo:'500'},
        {id:8, harga:"Rp. 9.000", name: "Ridiculus mus",      jenis: "Minuman Tradisonal",  namemakanan: "Bakso",  alamat: "Jln. Jendral Sudirman No.34 Depan SMA",  jarak:"8 KM",         colsimage:require('@images/c8.jpg' ), jarak:'89 KM',like:'10',comment:'40',logo:'500'},
        {id:9, harga:"Rp. 19.000", name: "Felis",             jenis: "Minuman Unik Tradisonal",  namemakanan: "Soto",  alamat: "Jln. Jendral Sudirman No.34 Depan SMA",  jarak:"9 KM",               colsimage:require('@images/c9.jpg' ), jarak:'99 KM',like:'10',comment:'40',logo:'500'},
      ]
});
export const LIST_MAKANAN_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_MAKANAN_GET(ceklist));
	}
}


//Product Prioritas
export const LIST_PRODUCT_PREORITAS_GET = getlist => ({
		type    : LIST_PRODUCT_PREORITAS,
		playlod :  [
			        {id:1, harga:"Rp. 10.000",  name: "Warung Bu Mian",       jarak:"1 KM", colsimage:require('@images/c1.jpg' ) ,type: "Makanan"},
			        {id:2, harga:"Rp. 20.000",  name: "Warung Bu Ida",         jarak:"2 KM", colsimage:require('@images/m1.jpg' ),type: "Minuman"},
			        {id:3, harga:"Rp. 5.000",  name: "Warung Bu Gureng ",      jarak:"3 KM", colsimage:require('@images/c2.jpg' ),type: "Makanan"},
			        {id:4, harga:"Rp. 11.000",  name: "Warung Bu Asih",      jarak:"4 KM", colsimage:require('@images/m2.jpg' ),type: "Minuman"},
			        {id:5, harga:"Rp. 14.000",  name: "Mba Wah",               jarak:"5 KM", colsimage:require('@images/c3.jpg' ),type: "Makanan"},
			        {id:6, harga:"Rp. 13.000",  name: "Warung Bu Erlin",       jarak:"6 KM", colsimage:require('@images/m3.jpg' ),type: "Minuman"},
			        {id:7, harga:"Rp. 15.000",  name: "Warung Bu Yunus",       jarak:"7 KM", colsimage:require('@images/c4.jpg' ),type: "Makanan"},
			        {id:8, harga:"Rp. 9.000",  name: "Roki Roko Roki",          jarak:"8 KM", colsimage:require('@images/m4.jpg' ),type: "Minuman"},
			        {id:9, harga:"Rp. 10.000", name: "Warung Bu Jarwo",       jarak:"1 KM", colsimage:require('@images/c5.jpg' ),type: "Makanan"},
			        {id:10, harga:"Rp. 20.000", name: "Warung Bu Ida",         jarak:"2 KM", colsimage:require('@images/m5.jpg' ),type: "Minuman"},
			        {id:11, harga:"Rp. 5.000",  name: "Warung Bu Gureng ",      jarak:"3 KM", colsimage:require('@images/c6.jpg' ),type: "Makanan"},
			        {id:12, harga:"Rp. 11.000", name: "Warung Bu Slamet",      jarak:"4 KM", colsimage:require('@images/m6.jpg' ),type: "Minuman"},
			        {id:13, harga:"Rp. 14.000",  name: "Mba Wah",               jarak:"5 KM", colsimage:require('@images/c7.jpg' ),type: "Makanan"},
			        {id:14, harga:"Rp. 13.000",  name: "Warung Bu Erlin",       jarak:"6 KM", colsimage:require('@images/m7.jpg' ),type: "Minuman"},
			        {id:15, harga:"Rp. 15.000",  name: "Warung Bu Yunus",       jarak:"7 KM", colsimage:require('@images/c8.jpg' ),type: "Makanan"},
			        {id:17, harga:"Rp. 9.000",  name: "Ridiculus mus",          jarak:"8 KM", colsimage:require('@images/m8.jpg' ),type: "Minuman"},
			        {id:18, harga:"Rp. 15.000",  name: "Warung Bu Yunus",       jarak:"7 KM", colsimage:require('@images/c9.jpg' ),type: "Makanan"},
			        {id:19, harga:"Rp. 9.000",  name: "Ridiculus mus",          jarak:"8 KM", colsimage:require('@images/m9.jpg' ),type: "Minuman"},
			        {id:"0999", harga:"Rp. 19.000",  name: "Felis",      jarak:"9 KM", colsimage:require('@images/redmore.png' ),type: "REDMORE"},
			  ]
});
export const LIST_PRODUCT_PREORITAS_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_PRODUCT_PREORITAS_GET(ceklist));
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
