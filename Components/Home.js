import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';

export default class Home extends Component{

	toHeade(){
			this.props.navigation.navigate('Heade');
	}

	render(){
		return(
			<ScrollView>
			<StatusBar backgroundColor="#007bb6" barStyle="light-content" />
			<View style={style.container}>
				<TouchableOpacity 
					style={style.buton}
					onPress={()=> this.toHeade()}
				>
					<Text style={style.innerText}>Heade</Text>
				</TouchableOpacity>
			</View>
			</ScrollView>
		)
	}
}
const style = StyleSheet.create({
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
		marginTop: 20,
		width: '90%',
	},
	innerText:{
		color: 'white',
	},
})