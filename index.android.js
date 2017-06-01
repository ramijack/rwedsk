import React, { Component } from 'react'
import {
  AppRegistry 
} from 'react-native'

import { TabNavigator } from 'react-navigation'

import Couple from './components/Couple'
import Place from './components/Place'
import Wedding from './components/Wedding'

const MainScreenNavigator = TabNavigator({
  Invite: {screen: Wedding},
  Home: {screen: Couple},
  Location: {screen: Place }
}, {
  tabBarPosition: 'bottom',
  initialRouteName: 'Home',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#fff',
    style: {
    backgroundColor: '#7c63cc',
  }
  }
})

AppRegistry.registerComponent('rwedsk', () => MainScreenNavigator)