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
import MyNotificationsScreen from './notifications.js';
import HomeScreen from './homepage.js';
import CamScreen from './camscreen.js';

  const watdog = TabNavigator({
    Home: { screen: HomeScreen },
    Cam: { screen: CamScreen },
    Notifications: { screen: MyNotificationsScreen},
  }, {
    headerMode: 'screen',
    tabBarOptions: {
      tabBarVisible: false,
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'transparent',
      },
      indicatorStyle: 'transparent'
    },
    swipeEnabled: true,
  }
);

AppRegistry.registerComponent('watdog', () => watdog);

{/*   <Button
  onPress={() => navigate('Cam')}
  title="Take a picture"
  />
  <Button
  onPress={() => navigate('Notifications')}
  title="Go to notifications"
  />  */}
