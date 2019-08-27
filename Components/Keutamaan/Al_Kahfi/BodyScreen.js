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
            Menjaga dari fitnah Dajjal. “Barang siapa yang berada di zaman dajal hendaknya membaca ayat-ayat pertama di surat Al-Kahfi.” (HR Muslim)
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.innerText}>
            Rumahnya tidak akan dimasuki setan. Ibnu Mardawaih meriwayatkan dari Abdullah bin Mughaffal, “Rumah yang dibacakan di dalamnya surah Al-Kahfi atau Al-Baqarah tidak akan dimasuki oleh setan sepanjang malam.”
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.innerText}>
            Dipancarkan cahaya sejauh dirinya dan Ka’bah. Diriwayatkan dari Sahabat Abu Sa’id al-Khudri bahwa Nabi Saw bersabda: “Barangsiapa membaca surat al-Kahfi pada malam Jum’at, maka dipancarkan cahaya untuknya sejauh antara dirinya dia dan Baitul ‘Atiq (Ka’bah).” (Sunan Ad-Darimi, no. 3273)
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.innerText}>
            Dipancarkan cahaya di antara dua Jumat. Dalam riwayat lain, masih dari Abu Sa’id al-Khudri ra, “Barangsiapa membaca surat Al-Kahfi pada hari Jumat, maka akan dipancarkan cahaya untuknya di antara dua Jumat.”
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.innerText}>
            Menerangi di hari Kiamat. Abdullah bin Umar ra berkata: Rasulullah Saw bersabda, “Siapa yang membaca surat Al-Kahfi pada hari Jum’at, maka akan memancar cahaya dari bawah kakinya sampai ke langit, akan meneranginya kelak pada hari kiamat, dan diampuni dosanya antara dua jumat.”
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
