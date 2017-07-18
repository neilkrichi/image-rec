'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  Image,
  StatusBar
} from 'react-native';
import { TabNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarVisible: false,
    tabBarLabel: 'Home',
    tabBarIcon: () => (
      <Image
        source={require('./favicon.png')}
        style={styles.icon}
        />
    ),
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image source={require('./images/yosemite-merced.jpg')} style={styles.container} >
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center', marginTop: 30, fontSize: 20, backgroundColor: 'transparent', color: 'white'}}>Hi again, firas!</Text>
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
