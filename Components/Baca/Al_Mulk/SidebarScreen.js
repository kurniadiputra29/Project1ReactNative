import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from "native-base";

export default class SidebarScreen extends Component{

  render(){
    return(
      <View style={style.container}>
        <TouchableOpacity style={style.button}>
          <Text>Keutamaan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text>Tampilkan Ayat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text>Tampilkan Ayat & Artinya</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 5,
    borderBottomWidth: 0.2,
    marginLeft: '25%',
    width: '75%',
    
  },
  button:{
    paddingTop: 10,
    paddingBottom: 10,
  },
})