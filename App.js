import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './Components/Home';
import HeadeScreen from './Components/Heade/Heade';

const a = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      title: "Home",
      headerStyle: {
        backgroundColor: '#007bb6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  Heade:{
    screen: HeadeScreen,
    navigationOptions:{
      title: "Daftar Surah",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
})

const AppContainer = createAppContainer(a);

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})