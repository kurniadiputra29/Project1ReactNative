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
    alert(this.state.sidebar)
  }

  render(){
    const {nav, title, backButton} = this.props; //untuk menyingkat this props
    return(
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
          <Text style={style.texttengah}>Ad Dukhaan</Text>
        </View>
        <View style={style.right}>
          <TouchableOpacity onPress={()=>this.toSidebar()}>
          <Icon name="menu" size={27}/>
          </TouchableOpacity>
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
})