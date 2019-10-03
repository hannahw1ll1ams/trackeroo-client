import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PersonalProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is your Personal Profile.</Text>
      </View>
    );
  }
}

export default PersonalProfile;