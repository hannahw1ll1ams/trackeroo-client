import styles from './styles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class GroupsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Groups Screen</Text>
      </View>
    );
  }
}

export default GroupsScreen;