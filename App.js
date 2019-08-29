import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './Components/Home';
import Info from './Components/Info';
import Al_Mulk_Baca from './Components/Baca/Al_Mulk/App';
import Al_Kahfi_Baca from './Components/Baca/Al_Kahfi/App';
import Al_Waqiah_Baca from './Components/Baca/Al_Waqiah/App';
import Yasin_Baca from './Components/Baca/Yasin/App';
import Ar_Rahman_Baca from './Components/Baca/Ar_Rahman/App';
import Ad_Dukhaan_Baca from './Components/Baca/Ad_Dukhaan/App';
import Al_Ikhlas_Baca from './Components/Baca/Al_Ikhlas/App';
import Al_Falaq_Baca from './Components/Baca/Al_Falaq/App';
import An_Nas_Baca from './Components/Baca/An_Nas/App';

import Al_Mulk_K from './Components/Keutamaan/Al_Mulk/App';
import Al_Kahfi_K from './Components/Keutamaan/Al_Kahfi/App';
import Al_Waqiah_K from './Components/Keutamaan/Al_Waqiah/App';
import Yasin_K from './Components/Keutamaan/Yasin/App';
import Ar_Rahman_K from './Components/Keutamaan/Ar_Rahman/App';
import Ad_Dukhaan_K from './Components/Keutamaan/Ad_Dukhaan/App';
import Al_Ikhlas_K from './Components/Keutamaan/Al_Ikhlas/App';
import Al_Falaq_K from './Components/Keutamaan/Al_Falaq/App';
import An_Nas_K from './Components/Keutamaan/An_Nas/App';

const a = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      header: null,
    }
  },
  Al_Mulk_Baca:{
    screen: Al_Mulk_Baca,
    navigationOptions:{
      header: null,
    }
  },
  Al_Kahfi_Baca:{
    screen: Al_Kahfi_Baca,
    navigationOptions:{
      header: null,
    }
  },
  Al_Waqiah_Baca:{
    screen: Al_Waqiah_Baca,
    navigationOptions:{
      header: null
    }
  },
  Yasin_Baca:{
    screen: Yasin_Baca,
    navigationOptions:{
      header: null
    }
  },
  Ar_Rahman_Baca:{
    screen: Ar_Rahman_Baca,
    navigationOptions:{
      header: null
    }
  },
  Ad_Dukhaan_Baca:{
    screen: Ad_Dukhaan_Baca,
    navigationOptions:{
      header: null
    }
  },
  Al_Ikhlas_Baca:{
    screen: Al_Ikhlas_Baca,
    navigationOptions:{
      header: null
    }
  },
  Al_Falaq_Baca:{
    screen: Al_Falaq_Baca,
    navigationOptions:{
      header: null
    }
  },
  An_Nas_Baca:{
    screen: An_Nas_Baca,
    navigationOptions:{
      header: null
    }
  },
  Al_Mulk_K:{
    screen: Al_Mulk_K,
    navigationOptions:{
      header: null,
    }
  },
  Al_Kahfi_K:{
    screen: Al_Kahfi_K,
    navigationOptions:{
      header: null,
    }
  },
  Al_Waqiah_K:{
    screen: Al_Waqiah_K,
    navigationOptions:{
      header: null
    }
  },
  Yasin_K:{
    screen: Yasin_K,
    navigationOptions:{
      header: null
    }
  },
  Ar_Rahman_K:{
    screen: Ar_Rahman_K,
    navigationOptions:{
      header: null
    }
  },
  Ad_Dukhaan_K:{
    screen: Ad_Dukhaan_K,
    navigationOptions:{
      header: null
    }
  },
  Al_Ikhlas_K:{
    screen: Al_Ikhlas_K,
    navigationOptions:{
      header: null
    }
  },
  Al_Falaq_K:{
    screen: Al_Falaq_K,
    navigationOptions:{
      header: null
    }
  },
  An_Nas_K:{
    screen: An_Nas_K,
    navigationOptions:{
      header: null
    }
  },
  Info:{
    screen: Info,
    navigationOptions:{
      title: "Info Aplikasi",
      headerStyle: {
        backgroundColor: '#007bb6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
})

const AppContainer = createAppContainer(a);

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})