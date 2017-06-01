import React, { Component } from 'react'
import {
  StyleSheet, 
  Image,
  Dimensions,
  Linking
} from 'react-native'

import { TabNavigator } from 'react-navigation'
import place from '../assets/place.png'

import MapView from 'react-native-maps';

var {height, width} = Dimensions.get('window');

export default class Place extends Component {
  static navigationOptions = {
    tabBarLabel: 'Location',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={place}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }
  render() {
    return (
        <MapView
          style={styles.map}
          region={{
            latitude: 22.058,
            longitude: 82.182094,
            latitudeDelta: 0.115,
            longitudeDelta: 0.112,
          }}
        >
            <MapView.Marker
          coordinate={{
            latitude: 22.058,
            longitude: 82.182201,
          }}
          title={"Ashirwad Bhawan"}
          onPress={()=> {
            Linking.openURL("https://www.google.com/maps/place/Aashirwad+Bhavan,+CSEB+Colony,+Hemu+Nagar,+Sirgiti,+Chhattisgarh+495004,+India/@22.0566126,82.1800863,17z/data=!3m1!4b1!4m5!3m4!1s0x3a280acdf7dedafd:0xb234466e5dc03d67!8m2!3d22.0566259!4d82.1822611") 
          }}
        />
        </MapView>
    );
  }
};

const styles = StyleSheet.create({
  map: {
   flex: 1,
   width: width,
   height: height
  },
  icon: {
    width: 30,
    height: 30,
  },
});