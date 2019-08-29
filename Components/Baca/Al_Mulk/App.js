import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderScreen from './HeaderScreen';
import BodyScreen from './BodyScreen';

export default class App extends Component{
  state={
    destop: 'Ayat_Arti'
  };

  indukMethod(nerimaarg) {
    this.setState({
      destop: nerimaarg
    })
  }

  render(){
    return(
      <View style={style.container}>
        <HeaderScreen 
          backButton={true} 
          nav={this.props.navigation}
          onRef={(ref) => (this.indukRef = ref)}
          indukRef={this.indukMethod.bind(this)}
        />
        <BodyScreen destop={this.state.destop}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
})
