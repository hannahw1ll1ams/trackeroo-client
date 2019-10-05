import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AllUsersScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the AllUsersScreen.</Text>
      </View>
    );
  }
}

export default AllUsersScreen;