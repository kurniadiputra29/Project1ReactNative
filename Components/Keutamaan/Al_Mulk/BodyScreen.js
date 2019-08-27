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
            Surat Al Mulk memiliki fadhilah luar biasa yaitu untuk mencegah siksa kubur. Dari ‘Abdullah bin Mas’ud, ia berkata, “Barangsiapa membaca “Tabaraokalladzi bi yadihil mulk” (surat Al Mulk) setiap malam, maka Allah akan menghalanginya dari siksa kubur. Kami di masa Rasulullah shallallahu ‘alaihi wa sallam menamakan surat tersebut “Al-Mani’ah” (penghalang dari siksa kubur).  Dia adalah salah satu surat di dalam kitabullah. Barangsiapa membacanya setiap malam, maka ia telah memperbanyak dan telah berbuat kebaikan.” (HR. An Nasai dalam Al Kabir 6/179 dan Al Hakim. Hakim mengatakan bahwa sanad hadits tersebut shahih)
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
