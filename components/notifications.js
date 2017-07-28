'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ShareButtons from './share.js';



export default class MyNotificationsScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
    tabBarLabel: 'Notifications',
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
      <Grid style={{backgroundColor: '#F7F7F7'}}>
        <Row size={6}>
          <View style={styles.container}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 40, }} >
                It's a
              </Text>
              <Text
                style={{
                  marginBottom: 40,
                  textAlign: 'center',
                  fontSize: 50 ,
                  fontWeight: 'bold',
                }} >
                  Something
                </Text>
                <TouchableHighlight style={styles.button} onPress={() => navigate('Cam')}>
                  <Text style={{color: 'white', textAlign:'center', fontSize: 18}}>What else?</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.tryagainbutton}  onPress={() => navigate('Cam')}>
                  <Text style={{color: 'white', textAlign:'center', fontSize: 16}}>Try again</Text>
                </TouchableHighlight>
              </View>
            </Row>
            <Row size={1} >
              <ShareButtons />
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
        marginTop: 100
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
        margin: 5,
        borderRadius: 25,
        borderStyle: 'solid',
        borderWidth: 2,
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: 'darkblue',
        borderColor: 'transparent',
        borderBottomWidth: 0,
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,

      },
      tryagainbutton: {
        margin: 5,
        borderRadius: 25,
        borderStyle: 'solid',
        borderWidth: 2,
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: 'blue',
        borderColor: 'transparent',
        borderBottomWidth: 0,
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
      },
    });
