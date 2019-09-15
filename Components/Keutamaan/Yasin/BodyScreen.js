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
          <Text style={[style.innerText, {fontSize: this.props.size}]}>
            Diampuni dosa-dosa. “Siapa yang membaca (surat) Yasin pada malam hari dengan mengharap keridhaan Allah maka diampuni dosa-dosanya.” (HR. At Thabrani dan Al-Bayhaqi, dari Abu Hurairah ra).
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={[style.innerText, {fontSize: this.props.size}]}>
            Dianggap mati syahid. “Barang siapa yang membiasakan membaca Yasin setiap malam maka tanpa terduga dia menemui ajalnya, maka matinya dalam keadaan syahid.” (HR. At-Thabrani, dari pernyataan Anas bin Malik).
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={[style.innerText, {fontSize: this.props.size}]}>
            Mempermudah segala urusan. “Barang siapa membaca surat Yasin dari pagi hari, maka pekerjaan di hari itu dimudahkan dengan keberhasilan, dan jika membacanya di akhir hari maka tugasnya hingga pagi hari berikutnya akan dimudahkan juga.” (Sunan A-Daarimi juz 2 halaman 549).
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={[style.innerText, {fontSize: this.props.size}]}>
            Terhindar dari siksa kubur. “Barang siap yang mengunjungi makam seseorang dan membacakan surat Yasin maka pada hari itu Allah SWT meringankan siksa kubur mereka dan diberikannya kebaikan bagi sejumlah penghuni kubur diperkuburan itu.” (Tafsir Nur Ats-Tsagalayn 4/373)
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={[style.innerText, {fontSize: this.props.size}]}>
            Mempermudah sakaratul maut. Membaca surat Yasin juga dipercaya dapat membantu sakaratul maut agar lebih mudah. Sebagaimana dijelaskan dalam tafsir Al-Quran: “Membaca surat Yasin di sisi mayat akan menurunkan banyak rahmat dan berkah, serta memudahkan keluarnya ruh.” (Tafsir Al-Qur’an Al-Azhim 6/562). Ada juga riwayat lain: “Disunnahkan membaca surat Yasin di samping seseorang yang sedang menghadapi kematian.” (Al-Majmu’syaih Al-Muhadzdzab 5/76 Dar’alim Alkitab).
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={[style.innerText, {fontSize: this.props.size}]}>
            Segala hajat dikabulkan. Dijelaskan dalam hadist: “Barang siapa yang membaca surat Yasin sepenuhnya dan saat mencapai ayat 58 diulang sebanyak 7 kali, maka Allah SWT akan mempermudah dan mengabulkan hajatnya.”
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={[style.innerText, {fontSize: this.props.size}]}>
            Membantu pengampunan agar diterima Allah Ta’ala. “Barang siapa yang membaca surah Yasin untuk memohon ridha Allah, maka akan diampuni dosanya yang telah lalu.” (Al-Baihagy dalam Sya’abil Iman serta Mu’qil bin Yasar Rabersanma Kanzul Aumal Juz 112629).
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
    width: '100%',
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
    color: '#262626',
    lineHeight: 25,
  },
})
