import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Home"
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen.</Text>
        <Text>Username : {JSON.stringify(this.props.navigation.getParam('ursename', 'NO-username'))}</Text>
        <Text>Username : {JSON.stringify(this.props.navigation.getParam('password', 'NO-password'))}</Text>
      </View>
    );
  }
}

export default HomeScreen;