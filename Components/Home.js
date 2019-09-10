import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity, StatusBar, Image, Dimensions, ImageBackground} from 'react-native';
import {Text, } from "native-base";
import { Icon } from 'react-native-elements';

export default class Home extends Component{
	
	toInfo(){
		this.props.navigation.navigate('Info');
	}
	toMenu1(){
		this.props.navigation.navigate('Menu1');
	}
	toMenu2(){
		this.props.navigation.navigate('Menu2');
	}

	render(){
		return(
			<View style={style.container}>
			<StatusBar backgroundColor="#00bcd4" barStyle="light-content" />
				
				<View style={{position: 'absolute', flexDirection: 'row-reverse',  width: '100%', padding: 10,}}>
					<TouchableOpacity
						onPress={()=>this.toInfo()}
					>
						<Icon name="info" size={30} color="grey"/>
					</TouchableOpacity>
				</View>
				<View style={{position: 'absolute', flexDirection: 'row-reverse',  width: '100%', marginTop: 100, padding: 5, alignItems: 'center', justifyContent: 'center'}}>
					<Image
						style={{width: '90%', height: 70,}}
						source={require('./Icon/icon8.png')}
					/>
				</View>
			<View style={{position: 'absolute',  width: '100%', marginTop: 250, padding: 5, alignItems: 'center', justifyContent: 'center'}}>
				<TouchableOpacity
					onPress={()=>this.toMenu1()}
				>
					<ImageBackground source={require('./Icon/Ayat.png')} style={{width: Dimensions.get('window').width, height: 120,}}>
			  	</ImageBackground>
				</TouchableOpacity>
			</View>
			<View style={{position: 'absolute',  width: '100%', marginTop: 400, padding: 5, alignItems: 'center', justifyContent: 'center'}}>
				<TouchableOpacity
					onPress={()=>this.toMenu2()}
				>
					<ImageBackground source={require('./Icon/keutamaan.png')} style={{width: Dimensions.get('window').width, height: 100,}}>
			  	</ImageBackground>
				</TouchableOpacity>
			</View>
		</View>
		)
	}
}
const style = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		},
})
// <ImageBackground source={require('./Icon/icon6.png')} style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height,}}>
// 					<View style={{backgroundColor: '#00bcd4', width: Dimensions.get('window').width, height: Dimensions.get('window').height, opacity: 0.15}}>
// 			    </View>
// 			  </ImageBackground>