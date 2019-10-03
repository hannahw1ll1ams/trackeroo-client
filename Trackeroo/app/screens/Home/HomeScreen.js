import styles from './styles';
import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  };

  state = {
    isLoading: true
  }
  render() {
    const { navigate } = this.props.navigation;

    // const { isLoading } = this.state;
    // if (isLoading) return <ActivityIndicator size="small" color="#00ff00" />
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen.</Text>
        <Text>Username : {JSON.stringify(this.props.navigation.getParam('username', 'NO-username'))}</Text>
        <Text>Password : {JSON.stringify(this.props.navigation.getParam('password', 'NO-password'))}</Text>
        <Text>GroupName : {JSON.stringify(this.props.navigation.getParam('groupName', 'no-group'))}</Text>
        <Button title="Actually, sign me out" onPress={() => navigate('LoginScreen', { title: 'Sign In' })} />
      </View>
    );
  }
}

export default HomeScreen;