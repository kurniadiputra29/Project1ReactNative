import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import {Text} from "native-base";

export default class HeaderScreen extends Component{

	render(){
		const {nav, title, backButton} = this.props; //untuk menyingkat this props
		return(
			<View style={style.container}>
				<ScrollView >
				<View style={{alignItems: 'center', marginTop: 15}}>
					<Image
	          style={{width: 150, height: 150,}}
	          source={require('./icon.jpeg')}
	        />
	        <Text style={{fontWeight: 'bold'}}>
	        أفضل السور
	        </Text>
	        <Text style={{fontWeight: 'bold'}}>
	        Afdholu Suur
	        </Text>
        </View>
				<View style={style.content1}>
					<View>
						<Text style={{paddingBottom: 8, fontSize: 14,}}>
							Puji Syukur kami panjatkan kepada Allah, yang telah memberikan nikmat, rizki dan hidayah-Nya. Sholawat serta salam tak lupa kita curahkan kepada Rasulullah ﷺ. Semoga kita termasuk orang yang mendapatkan syafaatnya di yaumul akhir nanti. 
						</Text>
						<Text style={{paddingBottom: 8, fontSize: 14,}}>
							Aplikasi ini di buat guna untuk menyelesaikan tugas project mobile. 
						</Text>
						<Text style={{paddingBottom: 8, fontSize: 14,}}>
							Aplikasi ini bersumber dari https://nourabooks.co.id/keutamaan-dalam-setiap-bacaan-surat-al-quran/. 
						</Text>
						<Text style={{paddingBottom: 8, fontSize: 14,}}>
							Semoga Aplikasi ini dapat bermanfaat bagi pembaca. Bilamana Aplikasi ini banyak sekali kekeliruan dan kesalahan mohon dimaklumi.
						</Text>
					</View>
					<View>
						<Text style={{paddingBottom: 8, paddingTop: 5, fontSize: 16, fontWeight: 'bold'}}>
							Developers
						</Text>
						<Text style={{paddingBottom: 8, fontSize: 14,}}>
							Nama : Kurniadi Putra
						</Text>
						<Text style={{paddingBottom: 8, fontSize: 14,}}>
							Asal : Wonogiri
						</Text>
						<Text style={{paddingBottom: 8, fontSize: 14,}}>
							Status : Santri Pondok Informatika Al Madinah
						</Text>
					</View>
					<View>
						<Text style={{paddingBottom: 8, paddingTop: 5, fontSize: 16, fontWeight: 'bold'}}>
							Pondok Informatika Al-Madinah
						</Text>
						<View style={{flexDirection: 'row',  alignItems: 'center'}}>
							<Icon name="mail" size={20} color="black"/>
							<Text style={{paddingBottom: 8, paddingLeft: 8, fontSize: 14,}}>
								pondokitalmadinah@gmail.com
							</Text>
		        </View>
		        <View style={{flexDirection: 'row',  alignItems: 'center'}}>
							<Icon name="public" size={20} color="black"/>
							<Text style={{paddingBottom: 8, paddingLeft: 8, fontSize: 14,}}>
								http://pondokinformatika.com
							</Text>
		        </View>
		        <View style={{flexDirection: 'row',  alignItems: 'center', flex: 1}}>
							<Icon name="home" size={20} color="black" style={{flex: 1}}/>
							<Text style={{paddingBottom: 8, paddingLeft: 8, fontSize: 14, flex: 1}}>
								jl. Raya Krapyak Rt 05, Karanganyar, Wedomartani, Ngemplak, Sleman, DIY.
							</Text>
		        </View>
	        </View>
				</View>
				</ScrollView>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		width: '100%',
		justifyContent: 'center',
	},
	content1:{
    flex: 1,
    padding: 15,
	},
	content2:{
    flex: 1,
    padding: 15,
	},
})