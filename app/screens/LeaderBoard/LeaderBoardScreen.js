import styles from './styles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LeaderBoardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the LeaderBoard</Text>
      </View>
    );
  }
}

export default LeaderBoardScreen;