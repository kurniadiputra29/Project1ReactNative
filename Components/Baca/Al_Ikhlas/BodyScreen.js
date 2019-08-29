import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Content, Text} from "native-base";

export default class BodyScreen extends Component{
  render(){
    return(
      <View style={style.container}>
      <ScrollView style={style.wrepper}>

      { this.props.destop == 'Ayat_Arti'
        ?(
          <Content style={{backgroundColor: '#F3FEFF' }}>
            <View style={style.bismillah}>
              <Text style={style.innerBismillah}>
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>1. </Text>
                Katakanlah: "Dialah Allah, Yang Maha Esa.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                اللَّهُ الصَّمَدُ ﴿٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>2. </Text>
                Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>3. </Text>
                Dia tiada beranak dan tidak pula diperanakkan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>4. </Text>
                dan tidak ada seorangpun yang setara dengan Dia".
              </Text>
            </View>
          </Content>
        )
        : null
      }
      { this.props.destop == 'Ayat'
        ?(
          <Content style={{backgroundColor: '#F3FEFF' }}>
            <View style={style.bismillah}>
              <Text style={style.innerBismillah}>
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                اللَّهُ الصَّمَدُ ﴿٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾
              </Text>
            </View>
          </Content>
        )
        : null
      }
      { this.props.destop == 'Arti'
        ?(
          <Content style={{backgroundColor: '#F3FEFF' }}>
            <View style={style.bismillah}>
              <Text style={style.innerBismillah}>
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>1. </Text>
                Katakanlah: "Dialah Allah, Yang Maha Esa.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>2. </Text>
                Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>3. </Text>
                Dia tiada beranak dan tidak pula diperanakkan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>4. </Text>
                dan tidak ada seorangpun yang setara dengan Dia".
              </Text>
            </View>
          </Content>
        )
        : null
      }
          
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
