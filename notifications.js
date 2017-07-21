'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  StatusBar
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from "react-native-easy-grid";


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
    const { navigate } = this.props.navigation;
    return (
      <Grid>
        <Row size={3}>
          <View style={styles.container}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 40, }} >
                It's a
              </Text>
              <Text
                style={{
                  margin: 20,
                  padding:20,
                  borderStyle: 'solid',
                  borderWidth: 2,
                  borderRadius: 4,
                  textAlign: 'center',
                  fontSize: 40,
                  fontWeight: 'bold'}} >
                  SOMETHING
                </Text>
            </View>
          </Row>
          <Row size={2} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Col>
              <TouchableHighlight style={styles.button}>
                <Text style={{color: 'white', textAlign:'center'}}>What else?</Text>
              </TouchableHighlight>
              </Col>
              <Col>
              <TouchableHighlight style={styles.button}  onPress={() => navigate('Cam')}>
                <Text style={{color: 'white', textAlign:'center'}}>Try again</Text>
              </TouchableHighlight>
              </Col>
          </Row>
          <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{marginRight: 5}}>Share</Text>
            <TouchableHighlight style={[styles.sharebutton, styles.twitterbutton]}>
              <FontAwesome name="twitter" style={{color: 'white', textAlign:'center'}} size={15}/>
            </TouchableHighlight>
                  <TouchableHighlight style={[styles.sharebutton, styles.fbbutton]}>
                    <FontAwesome name="facebook" style={{color: 'white', textAlign:'center'}} size={15}/>
                  </TouchableHighlight>
          </Row>
        </Grid>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 150
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
    button: {
      margin: 10,
      borderRadius: 20,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: 'black',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      backgroundColor: 'blue',
      borderColor: 'blue',
    },
    sharebutton: {
      margin: 3,
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'black',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
    },
    fbbutton: {
      backgroundColor: '#3b5998',
      borderColor: '#3b5998',
    },
    twitterbutton: {
      backgroundColor: '#00aced',
      borderColor: '#00aced',
    }
  });
