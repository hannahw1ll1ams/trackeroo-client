import styles from './styles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is MapScreen</Text>
      </View>
    );
  }
}

export default MapScreen;