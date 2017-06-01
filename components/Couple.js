import React, { Component } from 'react'
import {
  StyleSheet,
  Text, 
  View,
  Image 
} from 'react-native'

import { TabNavigator } from 'react-navigation'
import couple from '../assets/couple.png'
import rameshImg from '../assets/ramesh.png'
import kalyaniImg from '../assets/kalyani.png'

export default class Couple extends Component {
  static navigationOptions = {
    tabBarLabel: 'Couple',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={couple}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.unique}>
          <Image source={rameshImg} style={styles.img}/>
          <Text style={styles.title}>P. Ramesh</Text>
          <Text style={styles.subTitle}>S/o Smt. P.Punyavati & Shri P.Venkat Rao</Text>
        </View>
        <Text style={[styles.title]}>Weds</Text>
        <View style={styles.unique}>
          <Image source={kalyaniImg} style={styles.img}/>
          <Text style={styles.title}>Laxmi Kalyani</Text>
          <Text style={styles.subTitle}>D/o Smt. B.Vijayalaxmi &  B.Akku Naidu</Text>
        </View>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontFamily: 'playfairdisplay_regular',
    fontSize: 30,
    color: '#fff'
  },
  subTitle: {
    fontFamily: 'alice_regular',
    fontSize: 18,
    color: '#fff'
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#01a5ba'
  },
  unique: {
    paddingLeft: 0
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 2
  }
});