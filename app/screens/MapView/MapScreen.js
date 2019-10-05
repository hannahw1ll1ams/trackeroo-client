import styles from './SharedStyles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import Map from '../../components/Map';
// import StopWatch from '../../components/StopWatch';
import AlternativeMap from '../../components/AlternativeMap'

class MapScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is MapScreen</Text>
        {/* <Map style={styles.map} /> */}
        {/* <StopWatch /> */}
        <AlternativeMap />
      </View>
    );
  }
}

export default MapScreen;
