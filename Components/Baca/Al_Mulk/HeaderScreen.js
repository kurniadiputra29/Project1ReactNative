import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import {Text} from "native-base";

export default class HeaderScreen extends Component{
  state = {
    sidebar: false,
  }

  toSidebar(){
    this.setState({
      sidebar: !this.state.sidebar
    })
  }
  toKeutamaan(){
    alert('Keutamaan')
  }
  toAyat(){
    alert('Ayat')
  }
  toAyatArti(){
    alert('Ayat & Arti')
  }

  render(){
    const {nav, title, backButton} = this.props; //untuk menyingkat this props
    return(
      <View>
      <View style={style.container}>
        <View style={style.left}>
        { backButton == true
          ? (
            <TouchableOpacity
            onPress={() => nav.goBack()}
            >
              <Icon name="arrow-back" size={27}/>
            </TouchableOpacity>
          )
          :null
        }
        </View>
        <View style={style.tengah}>
          <Text style={style.texttengah}>Al Mulk</Text>
        </View>
        <View style={style.right}>
          <TouchableOpacity onPress={()=>this.toSidebar()}>
          <Icon name="menu" size={27}/>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {this.state.sidebar== true
          ?(
            <View style={style.sidebar}>
              <TouchableOpacity 
                style={style.button}
                onPress={()=>this.toKeutamaan()}
              >
                <Text>Keutamaan</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={style.button}
                onPress={()=>this.toAyat()}
              >
                <Text>Tampilkan Ayat</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={style.button}
                onPress={()=>this.toAyatArti()}
              >
                <Text>Tampilkan Ayat & Artinya</Text>
              </TouchableOpacity>
            </View>
          )
          :null
        }
      </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 5,
    borderBottomWidth: 0.2,
    width: '100%',
  },
  left:{

  },
  texttengah:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  right: {

  },
  sidebar:{
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 5,
    borderBottomWidth: 0.2,
    marginLeft: '30%',
    width: '70%',
  },
  button:{
    paddingTop: 10,
    paddingBottom: 10,
  },
})