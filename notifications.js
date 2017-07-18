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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarVisible: false,
    tabBarLabel: 'Notifications',
    tabBarIcon: () => (
      <Image
        source={require('./favicon.png')}
        style={styles.icon}
        />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.container}
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
          />
        <FontAwesome name="rocket" size={30} color="#900" />
        <Ionicon name="ios-reverse-camera" size={30} color="#900" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});
