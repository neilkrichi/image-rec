'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Button, Image, Dimensions } from 'react-native';
import Camera from 'react-native-camera';
var RNFS = require('react-native-fs');
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ShareButtons from './share.js';



export default class CamScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
    tabBarLabel: 'Cam',
    tabBarIcon: () => (
      <Image
        source={require('../favicon.png')}
        style={styles.icon}
        />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      features: [],
      featureIndex: 0,
      recognized: false,
      cameraType: 'back',
      lastPress: 0,
    };
  }

  switchCamera(){
    if(this.state.cameraType === 'back'){
      this.setState({cameraType: 'front'})
    }else{
      this.setState({cameraType: 'back'})
    }
  }

  onDoubleTap(){
    this.setState({
      lastPress: new Date().getTime()
    })
    var delta = new Date().getTime() - this.state.lastPress;
    if(delta < 200) {
      this.switchCamera()
      console.log(this.state.lastPress)
    }
  }

  incrementFeature(){
    this.setState({featureIndex: (this.state.featureIndex + 1)})
  }

  tryAgain(){
    this.setState({featureIndex: 0, features: [], recognized: false})
  }

  renderFeatures(){
    const { navigate } = this.props.navigation;
    return (
      <Grid style={{backgroundColor: '#F7F7F7'}}>
        <Row size={5}>
          <View style={styles.container}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 40 }} >
                It's a
              </Text>
              <Text
                style={styles.results} >
                {this.state.features[(this.state.featureIndex % 4)]['description'].toUpperCase()}
              </Text>
              <TouchableHighlight style={styles.button} onPress={this.incrementFeature.bind(this)}>
                <Text style={{color: 'white', textAlign:'center', fontSize: 18}}>What else?</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.tryagainbutton} onPress={() => this.tryAgain()}>
                <Text
                  style={{color: 'white', textAlign:'center', fontSize: 16}}
                  >
                  Try again
                </Text>
              </TouchableHighlight>
            </View>
          </Row>
          <Row size={1}>
            <ShareButtons />
          </Row>
        </Grid>
      )
    }

    renderCamera(){
      return (
        <Grid>
          <Row size={10}>
            <TouchableHighlight style={camstyles.container} activeOpacity={1} onPress={this.onDoubleTap.bind(this)} >
              <View style={camstyles.container}>
                <Camera
                  type={this.state.cameraType}
                  ref={(cam) => {this.camera = cam}}
                  style={camstyles.preview}
                  aspect={Camera.constants.Aspect.fill}
                  captureTarget={Camera.constants.CaptureTarget.disk}>
                  <TouchableHighlight style={camstyles.capture}
                    onPress={this.takePicture.bind(this)}>
                    <Text style={{display: 'none'}}></Text>
                  </TouchableHighlight>

                  <Text style={camstyles.switchcam}
                    onPress={this.switchCamera.bind(this)}>
                    <Ionicon name="ios-reverse-camera" size={50} color="white" />
                  </Text>
                </Camera>
              </View>
            </TouchableHighlight>
          </Row>

          <Row size={1} style={{backgroundColor: 'black'}}>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
              <View style={{width: Dimensions.get('window').width/3, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}} >
                <Text><FontAwesome name='building-o' size={25} style={{color: 'black'}} /></Text>
                <Text style={{color: 'black', paddingTop: 5}}>General</Text>
              </View>
              <View style={{width: Dimensions.get('window').width/3, justifyContent: 'center', alignItems: 'center'}} >
                <Text><FontAwesome name='globe' size={25} style={{color: 'white'}} /></Text>
                <Text style={{color: 'white', paddingTop: 5}}>Landmarks</Text>
              </View>
              <View style={{width: Dimensions.get('window').width/3, justifyContent: 'center', alignItems: 'center'}} >
                <Text style={{fontSize: 20}}>🐶</Text>
                <Text style={{color: 'white', paddingTop: 5}}>Dog breeds</Text>
              </View>
            </View>
          </Row>

        </Grid>

      );
    }

    renderYield(){
      if(this.state.recognized){
        return this.renderFeatures()
      }else{
        return this.renderCamera()
      }
    }

    render() {
      return this.renderYield()
    }

    postToGVision(img){
      const gcontent = `base64-encoded ${img}`
      const data = {
        "requests":[
          {
            "image":{
              "content": img
            },
            "features":[
              {
                "type":"LABEL_DETECTION",
                "maxResults": 5
              }
            ]
          }
        ]
      }

      fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCdCFZWviKDpPyLh9aeiu_QTU7MPixAdd0', {
        method: "POST",
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({features: responseJson.responses[0]['labelAnnotations'], recognized: true})
      }).catch((error)=>{console.log(error)})

    }

    takePicture() {
      const options = {};
      //options.location = ...
      this.camera.capture({metadata: options})
      .then((data) => {

        RNFS.readFile(data.path, 'base64')
        .then(res => {
          this.postToGVision(res)
        })
        .catch(err => {
          console.log(err)
        })

      })
      .catch(err => console.error(err));
    }
  }

  const camstyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    preview: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',

    },
    capture: {
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: 5,
      borderRadius: 40,
      borderColor: 'white',
      height: 80,
      width: 80,
    },
    switchcam: {
      textAlign: 'center',
      backgroundColor: 'transparent',
    },
    icon: {
      width: 24,
      height: 24,
    },
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: 24,
      height: 24,
    },
    button: {
      margin: 5,
      borderRadius: 25,
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: 'darkblue',
      borderBottomWidth: 0,
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2,
    },
    tryagainbutton: {
      margin: 10,
      borderRadius: 25,
      paddingHorizontal: 25,
      paddingVertical: 13,
      backgroundColor: 'blue',
      borderBottomWidth: 0,
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2,
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
      borderBottomWidth: 0,
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2,
    },
    results: {
      marginBottom: 40,
      textAlign: 'center',
      fontSize: 50,
      fontWeight: 'bold',
    }
  });
