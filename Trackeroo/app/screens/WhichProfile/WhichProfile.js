import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class WhichProfile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button title="=" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="GO"
        />)
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>You are....</Text>
        <Text>Your profile</Text>
        <Text>All users</Text>
        <Text>Log Out</Text>
      </View>
    );
  }
}

export default WhichProfile;