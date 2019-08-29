import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import {Text} from "native-base";

export default class HeaderScreen extends Component{

  render(){
    const {nav, title, backButton} = this.props; //untuk menyingkat this props
    return(
      <View>
        <Text>Info</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  
})