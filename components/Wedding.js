import React, { Component } from 'react'
import {
  StyleSheet,
  Text, 
  View,
  Image 
} from 'react-native'

import { TabNavigator } from 'react-navigation'
import wedding from '../assets/wedding.png'

export default class Wedding extends Component {
  static navigationOptions = {
    tabBarLabel: 'Wedding',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={wedding}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }
  render() {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>Sumuhurtam</Text>
            <Text style={styles.subTitle}>Saturday 10th Jun 2017,
                at 12:32 hrs (Midnight)
                Mulanakshra Meena Lagnam
                at "Ashirwaad Bhawan"
            </Text>
        </View>
    )
  }
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01a5ba'
  },
  title: {
    fontFamily: 'playfairdisplay_regular',
    fontSize: 35,
     color: '#fff'

  },
  subTitle: {
    fontFamily: 'alice_regular',
    fontSize: 18,
    paddingTop: 30,
    width: 280,
    color: '#fff',
    lineHeight: 30
  },
});