import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import {Text} from "native-base";

export default class HeaderScreen extends Component{
  toAl_Kahfi(){
      this.props.nav.navigate('Al_Kahfi_Baca');
  }
  state = {
    sidebar: false,
  }

  toSidebar(){
    this.setState({
      sidebar: !this.state.sidebar
    })
  }
  changeSize(size){
    this.props.indukRef(size);
    this.toSidebar();
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
            <Text style={style.texttengah}>Al Kahfi</Text>
          </View>
          <View style={style.right}>
          <TouchableOpacity 
            onPress={()=> this.toAl_Kahfi()}
            style={{marginRight: 10,}}
          >
            <Image
              source={require('../../Icon/book.png')}
              style={{width: 27, height: 27,}}
            />
          </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.toSidebar()}>
            <Icon name="menu" size={27}/>
            </TouchableOpacity>
          </View>
          
        </View>
        { this.state.sidebar == true
          ?(
            <View style={style.contain}>
              <TouchableOpacity 
              onPress={()=>this.changeSize(12)}
              style={style.button}>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>Small</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this.changeSize(15)}
              style={style.button}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this.changeSize(18)}
              style={style.button}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Large</Text>
              </TouchableOpacity>
            </View>
          )
          :null
        }
        
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
    flexDirection: 'row',
  },
  contain:{
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    backgroundColor: '#fff',
    elevation: 5,
    borderBottomWidth: 0.2,
    width: '100%',
    position: 'relative',
  },
  button:{
    paddingTop: 5,
    paddingBottom: 5,
  },
})