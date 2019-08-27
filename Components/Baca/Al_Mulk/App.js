import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderScreen from './HeaderScreen';
import BodyScreen from './BodyScreen';
import SidebarScreen from './SidebarScreen';

export default class App extends Component{
  render(){
    return(
      <View style={style.container}>
        <HeaderScreen backButton={true} nav={this.props.navigation}/>
        <BodyScreen />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
})
