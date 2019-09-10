import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity, StatusBar, ImageBackground, Dimensions, Image} from 'react-native';
import {Text, } from "native-base";
import { Icon } from 'react-native-elements';

export default class Menu2 extends Component{

	toAl_Mulk_K(){
			this.props.navigation.navigate('Al_Mulk_K');
	}
	toAl_Kahfi_K(){
			this.props.navigation.navigate('Al_Kahfi_K');
	}
	toAl_Waqiah_K(){
			this.props.navigation.navigate('Al_Waqiah_K');
	}
	toYasin_K(){
			this.props.navigation.navigate('Yasin_K');
	}
	toAr_Rahman_K(){
			this.props.navigation.navigate('Ar_Rahman_K');
	}
	toAd_Dukhaan_K(){
			this.props.navigation.navigate('Ad_Dukhaan_K');
	}
	toAl_Ikhlas_K(){
			this.props.navigation.navigate('Al_Ikhlas_K');
	}
	toAl_Falaq_K(){
			this.props.navigation.navigate('Al_Falaq_K');
	}
	toAn_Nas_K(){
			this.props.navigation.navigate('An_Nas_K');
	}
	toInfo(){
			this.props.navigation.navigate('Info');
	}
	goBack(){
			this.props.navigation.navigate('Home');
	}

	render(){
		return(
			<View style={{flex: 1}}>
					<View style={{flex: 1}}>
						<ScrollView>
						<View style={{flex: 1,}}>
							<View style={style.containerTop}>
								<View style={{justifyContent: 'center', alignItems: 'center'}}>
									<TouchableOpacity
			            onPress={() => this.goBack()}
			            >
			              <Icon name="arrow-back" size={27} color="#fff"/>
			            </TouchableOpacity>
								</View>
								<View style={{justifyContent: 'center', alignItems: 'center'}}>
									<Image
										source={require('./Icon/icon9.png')}
										style={{height: 40, width: Dimensions.get('window').width-180}}
									/>
								</View>
								<View style={{justifyContent: 'center', alignItems: 'center'}}>
									<TouchableOpacity
										onPress={()=>this.toInfo()}
									>
										<Icon name="info" size={27} color="#fff"/>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View style={style.tab}>
							<View style={style.container}>
								<TouchableOpacity
									onPress={()=> this.toAl_Kahfi_K()}
								>
									<ImageBackground 
										source={require('./Icon/kahfi.png')} 
										style={style.imageMenu}
									>
									</ImageBackground>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={()=> this.toYasin_K()}
								>
									<ImageBackground 
										source={require('./Icon/yasin.png')} 
										style={style.imageMenu}
									>
									</ImageBackground>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={()=> this.toAd_Dukhaan_K()}
								>
									<ImageBackground 
										source={require('./Icon/dukhon.png')} 
										style={style.imageMenu}
									>
									</ImageBackground>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={()=> this.toAr_Rahman_K()}
								>
									<ImageBackground 
										source={require('./Icon/rahman.png')} 
										style={style.imageMenu}
									>
									</ImageBackground>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={()=> this.toAl_Waqiah_K()}
								>
									<ImageBackground 
										source={require('./Icon/alwaqi.png')} 
										style={style.imageMenu}
									>
									</ImageBackground>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={()=> this.toAl_Mulk_K()}
								>
									<ImageBackground 
										source={require('./Icon/mulk.png')} 
										style={style.imageMenu}
									>
									</ImageBackground>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={()=> this.toAl_Ikhlas_K()}
								>
									<ImageBackground 
										source={require('./Icon/ikhlas.png')} 
										style={style.imageMenu}
									>
									</ImageBackground>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={()=> this.toAl_Falaq_K()}
								>
									<ImageBackground 
										source={require('./Icon/alfalaq.png')} 
										style={style.imageMenu}
									>
									</ImageBackground>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={()=> this.toAn_Nas_K()}
								>
									<ImageBackground 
										source={require('./Icon/nas.png')} 
										style={style.imageMenu}
									>
									</ImageBackground>
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
				</View>
		</View>
		)
	}
}
const style = StyleSheet.create({
	containerTop:{
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 15,
		paddingRight: 15,
		backgroundColor: '#00b0d4',
		elevation: 5,
		borderBottomWidth: 0.2,
		width: '100%',
	},
	texttengah:{
		fontWeight: 'bold',
		fontSize: 20,
		color: 'white',
	},
	tab:{
		marginTop: 10,
	},
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 30,
	},
	buton:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center', 
		backgroundColor: '#007bb6',
		padding: 10,
		borderRadius: 15,
		marginTop: 5,
		marginBottom: 5,
		width: '95%',
	},
	innerText:{
		color: 'white',
	},
	contain:{
		paddingLeft: 20,
		marginLeft: '50%',
		paddingRight: 20,
		paddingBottom: 10,
		paddingTop: 10,
		backgroundColor: '#fff',
		elevation: 5,
		borderBottomWidth: 0.2,
		width: '50%',
		position: 'relative',
		alignItems: 'flex-end',
	},
	button:{
		paddingTop: 5,
		paddingBottom: 5,
		width: '100%',
		alignItems: 'center',
	},
	imageMenu:{
		width: Dimensions.get('window').width-100,
		height: 80,
		margin: 15,
	},
})