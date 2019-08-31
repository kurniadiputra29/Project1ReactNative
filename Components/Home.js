import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {Text, Tab, TabHeading, Tabs} from "native-base";
import { Icon } from 'react-native-elements';

export default class Home extends Component{

	toAl_Mulk(){
			this.props.navigation.navigate('Al_Mulk_Baca');
	}
	toAl_Kahfi(){
			this.props.navigation.navigate('Al_Kahfi_Baca');
	}
	toAl_Waqiah(){
			this.props.navigation.navigate('Al_Waqiah_Baca');
	}
	toYasin(){
			this.props.navigation.navigate('Yasin_Baca');
	}
	toAr_Rahman(){
			this.props.navigation.navigate('Ar_Rahman_Baca');
	}
	toAd_Dukhaan(){
			this.props.navigation.navigate('Ad_Dukhaan_Baca');
	}
	toAl_Ikhlas(){
			this.props.navigation.navigate('Al_Ikhlas_Baca');
	}
	toAl_Falaq(){
			this.props.navigation.navigate('Al_Falaq_Baca');
	}
	toAn_Nas(){
			this.props.navigation.navigate('An_Nas_Baca');
	}

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

	render(){
		return(
			<ScrollView>
			<StatusBar backgroundColor="#007bb6" barStyle="light-content" />
			<View style={{flex: 1}}>
	      <View style={style.containerTop}>
	        <View style={style.left}>
	        </View>
	        <View style={style.tengah}>
	          <Text style={style.texttengah}>Surah Pilihan Dalam Al Qur'an</Text>
	        </View>
	        <View style={style.right}>
	          <TouchableOpacity
	          	onPress={()=>this.toInfo()}
	          >
	          	<Icon name="info" size={27} color="#fff"/>
	          </TouchableOpacity>
	        </View>
	      </View>
			</View>
			<Tabs>
				<Tab heading="Keutamaan" tabStyle={{backgroundColor: '#007bb6'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#007bb6'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
					<View style={style.tab}>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAl_Kahfi_K()}
							>
								<Text style={style.innerText}>Surah Al Kahfi</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toYasin_K()}
							>
								<Text style={style.innerText}>Surah Yasin</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAd_Dukhaan_K()}
							>
								<Text style={style.innerText}>Surah Ad Dukhaan</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAr_Rahman_K()}
							>
								<Text style={style.innerText}>Surah Ar Rahman</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAl_Waqiah_K()}
							>
								<Text style={style.innerText}>Surah Al Waqiah</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAl_Mulk_K()}
							>
								<Text style={style.innerText}>Surah Al Mulk</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAl_Ikhlas_K()}
							>
								<Text style={style.innerText}>Surah Al Ikhlas</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAl_Falaq_K()}
							>
								<Text style={style.innerText}>Surah Al Falaq</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAn_Nas_K()}
							>
								<Text style={style.innerText}>Surah An Nas</Text>
							</TouchableOpacity>
						</View>
					</View>
	      </Tab>
	      <Tab heading="Baca Al-Qur'an" tabStyle={{backgroundColor: '#007bb6'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#007bb6'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
					<View style={style.tab}>
		      	<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAl_Kahfi()}
							>
								<Text style={style.innerText}>Surah Al Kahfi</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toYasin()}
							>
								<Text style={style.innerText}>Surah Yasin</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAd_Dukhaan()}
							>
								<Text style={style.innerText}>Surah Ad Dukhaan</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAr_Rahman()}
							>
								<Text style={style.innerText}>Surah Ar Rahman</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAl_Waqiah()}
							>
								<Text style={style.innerText}>Surah Al Waqiah</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAl_Mulk()}
							>
								<Text style={style.innerText}>Surah Al Mulk</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAl_Ikhlas()}
							>
								<Text style={style.innerText}>Surah Al Ikhlas</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAl_Falaq()}
							>
								<Text style={style.innerText}>Surah Al Falaq</Text>
							</TouchableOpacity>
						</View>
						<View style={style.container}>
							<TouchableOpacity 
								style={style.buton}
								onPress={()=> this.toAn_Nas()}
							>
								<Text style={style.innerText}>Surah An Nas</Text>
							</TouchableOpacity>
						</View>
					</View>
	      </Tab>
			</Tabs>
			</ScrollView>
		)
	}
}
const style = StyleSheet.create({
	containerTop:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 15,
    backgroundColor: '#007bb6',
    elevation: 5,
    borderBottomWidth: 0.2,
    width: '100%',
  },
  left:{

  },
  texttengah:{
    fontWeight: 'bold',
    fontSize: 20,
   	color: 'white',
  },
  right: {

  },
	tab:{
		marginTop: 10,
	},
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
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
})