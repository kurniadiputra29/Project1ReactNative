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
            قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾
          </Text>
          <Text style={style.innerText}>
            Katakanlah: "Aku berlindung kepada Tuhan (yang memelihara dan menguasai) manusia.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
             مَلِكِ النَّاسِ ﴿٢﴾
          </Text>
          <Text style={style.innerText}>
            Raja manusia.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِلَهِ النَّاسِ ﴿٣﴾
          </Text>
          <Text style={style.innerText}>
            Sembahan manusia.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾
          </Text>
          <Text style={style.innerText}>
            Dari kejahatan (bisikan) syaitan yang biasa bersembunyi, 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾
          </Text>
          <Text style={style.innerText}>
            yang membisikkan (kejahatan) ke dalam dada manusia,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            مِنَ الْجِنَّةِ وَ النَّاسِ ﴿٦﴾
          </Text>
          <Text style={style.innerText}>
            dari (golongan) jin dan manusia.
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
