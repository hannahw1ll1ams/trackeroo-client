import styles from './SharedStyles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import Map from '../../components/Map';
// import StopWatch from '../../components/StopWatch';
import AlternativeMap from '../../components/AlternativeMap'
import AlternativeStopWatch from '../../components/AlternativeStopWatch';

class MapScreen extends Component {
  render() {
    return (
      <View style={styles.wholeContainer}>
        <AlternativeMap />
        <Text style={styles.text}>This is ...'s Run</Text>
        <AlternativeStopWatch style={styles.stopwatch} />
      </View>
    );
  }
}

export default MapScreen;
