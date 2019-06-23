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

//Dasboard PROF MENU
export const LIST_DASBOARD_MENU_PROF_GET = getlist => ({
		type    : LIST_DASBOARD_MENU_PROF,
		items   : [ 
						{ thumbnail: {  uri : require('@images/prof1.png' ) ,         mulai: '1' ,      buuton:'Soal 1'}},
						{ thumbnail: {  uri : require('@images/prof2.png' ) ,         mulai: '2' ,      buuton:'Soal 2'}},
						{ thumbnail: {  uri : require('@images/prof3.png' ) ,         mulai: '3' ,      buuton:'Soal 3'}},
						{ thumbnail: {  uri : require('@images/prof4.png' ) ,         mulai: '4' ,      buuton:'Soal 4'}},
						{ thumbnail: {  uri : require('@images/prof5.png' ) ,         mulai: '5' ,      buuton:'Soal 5'}},
						{ thumbnail: {  uri : require('@images/prof6.png' ) ,         mulai: '6' ,      buuton:'Soal 6'}},
						{ thumbnail: {  uri : require('@images/prof7.png' ) ,         mulai: '7' ,      buuton:'Soal 7'}},
						{ thumbnail: {  uri : require('@images/prof8.png' ) ,         mulai: '8' ,      buuton:'Soal 8'}},
						{ thumbnail: {  uri : require('@images/prof9.png' ) ,         mulai: '9' ,      buuton:'Soal 9'}},
						{ thumbnail: {  uri : require('@images/prof10.png' ) ,         mulai: '10' ,      buuton:'Soal 10'}},
				 ],
});
export const LIST_DASBOARD_MENU_PROF_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_MENU_PROF_GET(ceklist));
	}
}
//Dasboard CPNS HEADER
export const LIST_DASBOARD_PROF_GET = getlist => ({
		type    : LIST_DASBOARD_PROF,
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
export const LIST_DASBOARD_PROF_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_PROF_GET(ceklist));
	}
}

//Dasboard CPNS MENU
export const LIST_DASBOARD_MENU_CPNS_GET = getlist => ({
		type    : LIST_DASBOARD_MENU_CPNS,
		items   : [ 
						{ thumbnail: {  uri : require('@images/cpns1.png' ) ,         mulai: '1' ,      buuton:'Soal 1'}},
						{ thumbnail: {  uri : require('@images/cpns2.png' ) ,         mulai: '2' ,      buuton:'Soal 2'}},
						{ thumbnail: {  uri : require('@images/cpns3.png' ) ,         mulai: '3' ,      buuton:'Soal 3'}},
						{ thumbnail: {  uri : require('@images/cpns4.png' ) ,         mulai: '4' ,      buuton:'Soal 4'}},
						{ thumbnail: {  uri : require('@images/cpns5.png' ) ,         mulai: '5' ,      buuton:'Soal 5'}},
						{ thumbnail: {  uri : require('@images/cpns6.png' ) ,         mulai: '6' ,      buuton:'Soal 6'}},
						{ thumbnail: {  uri : require('@images/cpns7.png' ) ,         mulai: '7' ,      buuton:'Soal 7'}},
						{ thumbnail: {  uri : require('@images/cpns8.png' ) ,         mulai: '8' ,      buuton:'Soal 8'}},
						{ thumbnail: {  uri : require('@images/cpns9.png' ) ,         mulai: '9' ,      buuton:'Soal 9'}},
						{ thumbnail: {  uri : require('@images/cpns10.png' ) ,         mulai: '10' ,      buuton:'Soal 10'}},
				 ],
});
export const LIST_DASBOARD_MENU_CPNS_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_MENU_CPNS_GET(ceklist));
	}
}
//Dasboard CPNS HEADER
export const LIST_DASBOARD_CPNS_GET = getlist => ({
		type    : LIST_DASBOARD_CPNS,
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
export const LIST_DASBOARD_CPNS_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_CPNS_GET(ceklist));
	}
}


//Dasboard S1 MENU
export const LIST_DASBOARD_MENU_S1_GET = getlist => ({
		type    : LIST_DASBOARD_MENU_S1,
		items   : [ 
						{ thumbnail: {  uri : require('@images/s11.png' ) ,         mulai: '1' ,      buuton:'Soal 1'}},
						{ thumbnail: {  uri : require('@images/s12.png' ) ,         mulai: '2' ,      buuton:'Soal 2'}},
						{ thumbnail: {  uri : require('@images/s13.png' ) ,         mulai: '3' ,      buuton:'Soal 3'}},
						{ thumbnail: {  uri : require('@images/s14.png' ) ,         mulai: '4' ,      buuton:'Soal 4'}},
						{ thumbnail: {  uri : require('@images/s15.png' ) ,         mulai: '5' ,      buuton:'Soal 5'}},
						{ thumbnail: {  uri : require('@images/s16.png' ) ,         mulai: '6' ,      buuton:'Soal 6'}},
						{ thumbnail: {  uri : require('@images/s17.png' ) ,         mulai: '7' ,      buuton:'Soal 7'}},
						{ thumbnail: {  uri : require('@images/s18.png' ) ,         mulai: '8' ,      buuton:'Soal 8'}},
						{ thumbnail: {  uri : require('@images/s19.png' ) ,         mulai: '9' ,      buuton:'Soal 9'}},
						{ thumbnail: {  uri : require('@images/s110.png' ) ,         mulai: '10' ,      buuton:'Soal 10'}},
				 ],
});
export const LIST_DASBOARD_MENU_S1_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_MENU_S1_GET(ceklist));
	}
}
//Dasboard S1 HEADER
export const LIST_DASBOARD_S1_GET = getlist => ({
		type    : LIST_DASBOARD_S1,
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
export const LIST_DASBOARD_S1_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_S1_GET(ceklist));
	}
}


//Dasboard SMA MENU
export const LIST_DASBOARD_MENU_SMA_GET = getlist => ({
		type    : LIST_DASBOARD_MENU_SMA,
		items   : [ 
						{ thumbnail: {  uri : require('@images/sma1.png' ) ,         mulai: '1' ,      buuton:'Soal 1'}},
						{ thumbnail: {  uri : require('@images/sma2.png' ) ,         mulai: '2' ,      buuton:'Soal 2'}},
						{ thumbnail: {  uri : require('@images/sma3.png' ) ,         mulai: '3' ,      buuton:'Soal 3'}},
						{ thumbnail: {  uri : require('@images/sma4.png' ) ,         mulai: '4' ,      buuton:'Soal 4'}},
						{ thumbnail: {  uri : require('@images/sma5.png' ) ,         mulai: '5' ,      buuton:'Soal 5'}},
						{ thumbnail: {  uri : require('@images/sma6.png' ) ,         mulai: '6' ,      buuton:'Soal 6'}},
						{ thumbnail: {  uri : require('@images/sma7.png' ) ,         mulai: '7' ,      buuton:'Soal 7'}},
						{ thumbnail: {  uri : require('@images/sma8.png' ) ,         mulai: '8' ,      buuton:'Soal 8'}},
						{ thumbnail: {  uri : require('@images/sma9.png' ) ,         mulai: '9' ,      buuton:'Soal 9'}},
						{ thumbnail: {  uri : require('@images/sma10.png' ) ,         mulai: '10' ,      buuton:'Soal 10'}},
				 ],
});
export const LIST_DASBOARD_MENU_SMA_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_MENU_SMA_GET(ceklist));
	}
}
//Dasboard SMA HEADER
export const LIST_DASBOARD_SMA_GET = getlist => ({
		type    : LIST_DASBOARD_SMA,
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
export const LIST_DASBOARD_SMA_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_SMA_GET(ceklist));
	}
}



//Dasboard SMP MENU
export const LIST_DASBOARD_MENU_SMP_GET = getlist => ({
		type    : LIST_DASBOARD_MENU_SMP,
		items   : [ 
						{ thumbnail: {  uri : require('@images/smp1.png' ) ,         mulai: '1' ,      buuton:'Soal 1'}},
						{ thumbnail: {  uri : require('@images/smp2.png' ) ,         mulai: '2' ,      buuton:'Soal 2'}},
						{ thumbnail: {  uri : require('@images/smp3.png' ) ,         mulai: '3' ,      buuton:'Soal 3'}},
						{ thumbnail: {  uri : require('@images/smp4.png' ) ,         mulai: '4' ,      buuton:'Soal 4'}},
						{ thumbnail: {  uri : require('@images/smp5.png' ) ,         mulai: '5' ,      buuton:'Soal 5'}},
						{ thumbnail: {  uri : require('@images/smp6.png' ) ,         mulai: '6' ,      buuton:'Soal 6'}},
						{ thumbnail: {  uri : require('@images/smp7.png' ) ,         mulai: '7' ,      buuton:'Soal 7'}},
						{ thumbnail: {  uri : require('@images/smp8.png' ) ,         mulai: '8' ,      buuton:'Soal 8'}},
						{ thumbnail: {  uri : require('@images/smp9.png' ) ,         mulai: '9' ,      buuton:'Soal 9'}},
						{ thumbnail: {  uri : require('@images/smp10.png' ) ,         mulai: '10' ,      buuton:'Soal 10'}},
				 ],
});
export const LIST_DASBOARD_MENU_SMP_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_MENU_SMP_GET(ceklist));
	}
}
//Dasboard SMP HEADER
export const LIST_DASBOARD_SMP_GET = getlist => ({
		type    : LIST_DASBOARD_SMP,
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
export const LIST_DASBOARD_SMP_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_SMP_GET(ceklist));
	}
}

//Dasboard SD MENU
export const LIST_DASBOARD_MENU_SD_GET = getlist => ({
		type    : LIST_DASBOARD_MENU_SD,
		items   : [ 
						{ thumbnail: {  uri : require('@images/sd1.png' ) ,         mulai: '1' ,      buuton:'Soal 1'}},
						{ thumbnail: {  uri : require('@images/sd2.png' ) ,         mulai: '2' ,      buuton:'Soal 2'}},
						{ thumbnail: {  uri : require('@images/sd3.png' ) ,         mulai: '3' ,      buuton:'Soal 3'}},
						{ thumbnail: {  uri : require('@images/sd4.png' ) ,         mulai: '4' ,      buuton:'Soal 4'}},
						{ thumbnail: {  uri : require('@images/sd5.png' ) ,         mulai: '5' ,      buuton:'Soal 5'}},
						{ thumbnail: {  uri : require('@images/sd6.png' ) ,         mulai: '6' ,      buuton:'Soal 6'}},
						{ thumbnail: {  uri : require('@images/sd7.png' ) ,         mulai: '7' ,      buuton:'Soal 7'}},
						{ thumbnail: {  uri : require('@images/sd8.png' ) ,         mulai: '8' ,      buuton:'Soal 8'}},
						{ thumbnail: {  uri : require('@images/sd9.png' ) ,         mulai: '9' ,      buuton:'Soal 9'}},
						{ thumbnail: {  uri : require('@images/sd10.png' ) ,         mulai: '10' ,      buuton:'Soal 10'}},
				 ],
});
export const LIST_DASBOARD_MENU_SD_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_MENU_SD_GET(ceklist));
	}
}
//Dasboard SD HEADER
export const LIST_DASBOARD_SD_GET = getlist => ({
		type    : LIST_DASBOARD_SD,
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
export const LIST_DASBOARD_SD_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_SD_GET(ceklist));
	}
}

//Dasboard TK MENU
export const LIST_DASBOARD_MENU_TK_GET = getlist => ({
		type    : LIST_DASBOARD_MENU_TK,
		items   : [ 
						{ thumbnail: {  uri : require('@images/tk1.png' ) ,         mulai: '1' ,      buuton:'Soal 1'}},
						{ thumbnail: {  uri : require('@images/tk2.png' ) ,         mulai: '2' ,      buuton:'Soal 2'}},
						{ thumbnail: {  uri : require('@images/tk3.png' ) ,         mulai: '3' ,      buuton:'Soal 3'}},
						{ thumbnail: {  uri : require('@images/tk4.png' ) ,         mulai: '4' ,      buuton:'Soal 4'}},
						{ thumbnail: {  uri : require('@images/tk5.png' ) ,         mulai: '5' ,      buuton:'Soal 5'}},
						{ thumbnail: {  uri : require('@images/tk6.png' ) ,         mulai: '6' ,      buuton:'Soal 6'}},
						{ thumbnail: {  uri : require('@images/tk7.png' ) ,         mulai: '7' ,      buuton:'Soal 7'}},
						{ thumbnail: {  uri : require('@images/tk8.png' ) ,         mulai: '8' ,      buuton:'Soal 8'}},
						{ thumbnail: {  uri : require('@images/tk9.png' ) ,         mulai: '9' ,      buuton:'Soal 9'}},
						{ thumbnail: {  uri : require('@images/tk10.png' ) ,         mulai: '10' ,      buuton:'Soal 10'}},
				 ],
});
export const LIST_DASBOARD_MENU_TK_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_MENU_TK_GET(ceklist));
	}
}


//Dasboard TK HEADER
export const LIST_DASBOARD_TK_GET = getlist => ({
		type    : LIST_DASBOARD_TK,
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
export const LIST_DASBOARD_TK_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_TK_GET(ceklist));
	}
}


//Dasboard Menu
export const LIST_ROUTER_GET= getlist => ({
		type    : LIST_ROUTER,
		items   : [ 
					    { thumbnail: {  tittle: 'Map' ,      key:'Map'}},
						{ thumbnail: {  tittle: 'Signup' ,      key:'Signup'}},
						{ thumbnail: {  tittle: 'Dasbord' ,      key:'Dasbord'}},
						{ thumbnail: {  tittle: 'DasbordSetting' ,      key:'DasbordSetting'}},
						{ thumbnail: {  tittle: 'Scan' ,      key:'Scan'}},
						{ thumbnail: {  tittle: 'User' ,    key:'User'}},
				 ],
});
export const LIST_ROUTER_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_ROUTER_GET(ceklist));
	}
}


 
//Dasboard SETTING MENU
export const LIST_DASBOARD_MENU_SETTING_GET = getlist => ({
		type    : LIST_DASBOARD_MENU_SETTING,
		items   : [ 
						{ thumbnail: {  uri : require('@images/user.png' ) ,         mulai: 'User' ,              buuton:'User'}},
						{ thumbnail: {  uri : require('@images/scan.png' ) ,         mulai: 'Scan Barcode' ,      buuton:'Scan'}}
				 ],
});
export const LIST_DASBOARD_MENU_SETTING_CEK = (ceklist) => {
	return dispatch => {
		dispatch(LIST_DASBOARD_MENU_SETTING_GET(ceklist));
	}
}


//Dasboard SETTING HEADER
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
						  { thumbnail: {  uri : require('@images/setting.png' ) ,         mulai: 'Setting' ,              buuton:'Setting'}}
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
