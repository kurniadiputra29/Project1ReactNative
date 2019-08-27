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
            Dari Abu Hurairah ia berkata, Rasulullah bersabda: “Barang siapa membaca HAA MIIM (surat) Ad Dukhaan pada malam Jumat, maka (dosa-dosanya) akan diampuni.” (HR Thirmidzi no. 2814)
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.innerText}>
            Dari Abu Umamah r.a, bahwa sesungguhnya dia telah mendengar Rasulullah bersabda: “Barang siapa membaca surat Haamimm Ad-Dukhaan pada malam Jumat atau pada hari Jumat Allah, akan membangunkan untuknya satu rumah di surga “. (HR Thabrani)
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.innerText}>
            Baginda SAW juga bersabda, “Orang yang membaca surat Ad-Dukhaan pada malam Jumat akan dimintakan ampun (atas dosa-dosanya) menjelang paginya oleh 70.000 malaikat.”
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
