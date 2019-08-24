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
            Dalam sebuah hadist Rasulullah pernah berfirman, “Barang siapa yang membaca surat Al-Fatihah, Al-Ikhlas, Al-Falaq dan An-Naas tujuh kali sesudah shalat Jumat niscaya terpelihara dari perkara keji dan segala hingga hari Jumat yang akan datang”.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.innerText}>
            Rasullulah bersabda, “Bacalah surat Al-Ikhlas serta surat Al-Mu’awwidzatain (Al-Falaq dan An-Naas) pada waktu pagi dan petang hari sebanyak tiga kali , maka kamu akan dilindungi dari segala gangguan.” (Shahih Tirmidzi no. 2897 dengan sanad hasan gharib).
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.innerText}>
            Imam Malik meriwayatkan dari ‘Aisyah, bahwa apabila Rasullulah SAW sakit, beliau membaca Al-Mu’awwidzatain atas dirinya dan beliau meniupkannya. Ketika sakitnya semakin parah, maka aku membacakannya untuk beliau, dan aku usapkan kepada beliau dengan tangan beliau sendiri untuk mengharapkan barakahnya. (HR Bukhari dalam Fat-hul Baari (VIII/679), Abu Dawud (IV/220), An-Nasai dalam al-Kubraa (IV/867 dan 868) dan Ibnu Majah (II/1166)
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
