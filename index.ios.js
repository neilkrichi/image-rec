'use strict';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import MyNotificationsScreen from './notifications.js';
import HomeScreen from './homepage.js';
import CamScreen from './camscreen.js';
import TestShare from './testshare.js';

  const watdog = TabNavigator({
    Home: { screen: HomeScreen },
    Cam: { screen: CamScreen },
    Notifications: { screen: MyNotificationsScreen },
  }, {
    headerMode: 'screen',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'transparent',
      },
      indicatorStyle: 'transparent'
    },
    swipeEnabled: true
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
