import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CreateRunScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the CreateRunScreen.</Text>
      </View>
    );
  }
}

export default CreateRunScreen;