'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Button, Image } from 'react-native';
import { Animated } from 'react-native';

console.disableYellowBox = true;


export default class HomeScreen extends React.Component {


  static navigationOptions = {
    tabBarVisible: false,
    tabBarLabel: 'Home',
    tabBarIcon: () => (
      <Image
        source={require('../favicon.png')}
        style={styles.icon}
        />
    ),
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Image source={require('../images/yosemite-merced.jpg')} style={styles.container} >
          <View style={{backgroundColor: 'transparent'}}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white', fontWeight: 'bold'}} >
              Hi again, Neil!
            </Text>
            <Text
              onPress={() => navigate('Cam')}
              style={{padding:20, fontSize: 30, color: 'white', borderStyle: 'solid', borderColor: 'white', borderWidth: 2, borderRadius: 30, textAlign: 'center'}} >
              Get started
            </Text>
          </View>
        </Image>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'transparent',
  },
  switchcam: {
    backgroundColor: 'transparent',
  },
  icon: {
    width: 24,
    height: 24,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});
