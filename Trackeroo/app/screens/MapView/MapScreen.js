import styles from './SharedStyles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Map from '../../components/Map';
import StopWatch from '../../components/StopWatch';

class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is MapScreen</Text>
        <Map />
        <StopWatch />
      </View>
    );
  }
}

export default MapScreen;
