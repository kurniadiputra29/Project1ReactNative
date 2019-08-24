import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Content, Text} from "native-base";

export default class BodyScreen extends Component{
  render(){
    return(
      <View style={style.container}>
      <ScrollView style={style.wrepper}>
      <Content style={{backgroundColor: '#F3FEFF' }}>
        <View style={style.bismillah}>
          <Text style={style.innerBismillah}>
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾
          </Text>
          <Text style={style.innerText}>
            Katakanlah: "Aku berlindung kepada Tuhan Yang Menguasai subuh,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            مِن شَرِّ مَا خَلَقَ ﴿٢﴾
          </Text>
          <Text style={style.innerText}>
            dari kejahatan makhluk-Nya,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾
          </Text>
          <Text style={style.innerText}>
            dan dari kejahatan malam apabila telah gelap gulita,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾
          </Text>
          <Text style={style.innerText}>
            dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾
          </Text>
          <Text style={style.innerText}>
            dan dari kejahatan pendengki bila ia dengki".
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
  wrepper:{
    paddingBottom: 20,
  },
  bismillah:{
    backgroundColor: '#D3EDEF',
    padding: 15,
  },
  innerBismillah:{
    textAlign: 'center',
    fontSize: 21,
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
  arab:{
    fontSize: 21,
    marginBottom: 10,
    marginTop: 20,
  },
  innerText:{
    marginBottom: 20,
    marginTop: 10,
    fontSize: 14,
    color: '#262626',
  },
})
