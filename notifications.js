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
      <View style={{marginTop: 50}}>
        <Text
          style={{marginBottom: 40,
            margin: 20,
            padding:20,
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 4,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold'}}
          >
          It's a SOMETHING
        </Text>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
        <View
          style={{margin: 10, paddingLeft:50, paddingRight: 50, paddingTop:10, paddingBottom:25 , borderStyle: 'solid', borderWidth: 2, borderRadius: 4}}>
          <Text style={{textAlign: 'center'}}>What else?</Text>
        </View>
        <View
          style={{margin: 10, paddingLeft:50, paddingRight: 50, paddingTop:10, paddingBottom:25 , borderStyle: 'solid', borderWidth: 2, borderRadius: 4}}>
          <Text style={{textAlign: 'center'}}>Try again</Text>
        </View>
      </View>

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
