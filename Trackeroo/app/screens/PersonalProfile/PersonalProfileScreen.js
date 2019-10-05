import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import * as api from '../../../api'
import ToggleButton from '../../components/ToggleButton';

class PersonalProfile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <ToggleButton />),
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="GO"
        />)
    }
  };

  handleSignOut = async () => {
    const { navigate } = this.props.navigation
    try {
      await api.logout()
      navigate('LoginScreen', { title: 'Sign In' })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

export default PersonalProfile;