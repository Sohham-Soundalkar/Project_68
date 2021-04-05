import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Facebookpage from './screens/fb';
import Instagrampage from './screens/in';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App(){
  return(
    <View>
      <Appheader/>
    <AppContainer/>
    </View>
  )
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen:Facebookpage},
  Instagram: {screen:Instagrampage}
})

const AppContainer = createAppContainer(TabNavigator)