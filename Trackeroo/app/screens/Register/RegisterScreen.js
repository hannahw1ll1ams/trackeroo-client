import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class RegisterScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>This is the RegisterScreen.</Text>
        <Button title="Create account and Log In" onPress={() => navigate('HomeScreen', { username: 'hannahw1ll1ams', password: 24, otherParam: 'HomePage' })} />
      </View>
    );
  }
}

export default RegisterScreen;