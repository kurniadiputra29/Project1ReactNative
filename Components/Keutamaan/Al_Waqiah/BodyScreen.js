import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Content, Text} from "native-base";

export default class BodyScreen extends Component{
  render(){
    return(
      <View style={style.container}>
      <ScrollView>
      <Content style={{backgroundColor: '#F3FEFF' }}>
        <View style={style.bismillah}>
          <Text style={style.innerBismillah}>
            Keutamaan
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.innerText}>
            Terhindar dari sikap lalai. “Barang siapa yang membaca surat Al-Waqiah, maka ia akan dicatat tidak tergolong pada orang-orang yang lalai.”
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.innerText}>
            Dijauhkan dari kefakiran. Rasulullah bersabda dalam sebuah hadits bahwa “Barang siapa yang membaca surat Al-Waqiah, ia tidak akan tertimpa kefakiran selamanya.”
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.innerText}>
            Tidak akan tertimpa kemiskinan selamanya. “Dari Abdullah bin Mas’ud mendengar Rasulullah SAW bersabda, ‘Barang siapa yang membaca surat Al-Waqiah setiap malam maka dirinya tidak akan ditimpa kemiskinan selama-lamanya’.”
          </Text>
        </View>
      </Content>
      </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 3,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFF',
    flex: 1,
  },
  bismillah:{
    backgroundColor: '#D3EDEF',
    padding: 15,
  },
  innerBismillah:{
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
  },
  contentA:{
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentB:{
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#E5F8F9'
  },
  innerText:{
    marginBottom: 20,
    marginTop: 10,
    fontSize: 15,
    color: '#262626',
    lineHeight: 25,
  },
})
