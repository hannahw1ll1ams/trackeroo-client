import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PasswordResetScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the PasswordResetScreen.</Text>
      </View>
    );
  }
}

export default PasswordResetScreen;