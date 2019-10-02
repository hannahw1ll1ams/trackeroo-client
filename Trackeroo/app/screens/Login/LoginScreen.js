import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>This is the LoginScreen.</Text>
        <Button title="Sign In" onPress={() => navigate('HomeScreen', { username: 'hannahw1ll1ams', password: 24, otherParam: 'HomePage' })} />
        <Button title="Create a account" onPress={() => navigate('RegisterScreen')} />
      </View>
    );
  }
}

export default LoginScreen;