import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import SwipeableViews from 'react-swipeable-views-native';
// There is another version using the scroll component instead of animated.
// I'm unsure which one give the best UX. Please give us some feedback.
// import SwipeableViews from 'react-swipeable-views-native/lib/SwipeableViews.scroll';

export default class SwipeableComponent extends Component {

render() {
  return (
    <SwipeableViews style={styles.slideContainer}>
      <View style={styles.slide}>
        <Text style={styles.text}>
          slide n°1
        </Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>
          slide n°2
        </Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>
          slide n°3
        </Text>
      </View>
    </SwipeableViews>
  );
}
}
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  slideContainer: {
    backgroundColor: 'transparent',
    height: 100,
    width: Dimensions.get('window').width,
  },
  text: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center'
  },
});
