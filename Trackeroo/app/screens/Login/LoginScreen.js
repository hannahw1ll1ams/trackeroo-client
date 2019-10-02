import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
// import * as api from '../../../api'


class LoginScreen extends Component {
  state = {
    username: null,
    password: null,
    validUser: false,
    error: null
  }

  handleUsernameChange = (e) => {
    const { text } = e.nativeEvent
    console.log(e.nativeEvent.text)
    usernameRule = /^[a-zA-Z0-9]+$/
    if (usernameRule.test(text)) {
      console.log('username is valid')
      this.setState({ username: text })
    }
    else
      console.log('username is invalid')
  }

  handlePasswordChange = (e) => {
    const { text } = e.nativeEvent
    console.log(e.nativeEvent.text)

    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#"{}()<>£%+='$:;%^&*])(?=.{8,})/;
    if (passwordRule.test(text)) {
      console.log('password is valid')
      this.setState({ password: text })
    }
    else
      console.log('password is invalid')
  }

  handleSubmit = () => {
    const { username, password, validUser } = this.state
    const { navigate } = this.props.navigation;
    api.checkExistingUser(username, password).then((boolean) => {
      this.setState({ validUser: boolean })
    })
      .catch(error => {
        this.setState({
          error
        })
      })
    if (validUser) {
      navigate('HomeScreen', { username: username, password: password, otherParam: 'HomePage' })
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { username, password, error } = this.state
    if (error) return <Text>{error}</Text>
    return (
      <View style={styles.container}>
        <TextInput placeholder='username' onEndEditing={(event) => this.handleUsernameChange(event)} name='username'
        />
        <TextInput placeholder='password' name='password' onEndEditing={(event) => this.handlePasswordChange(event)}
        />
        <Text> This is the LoginScreen.</Text>
        <Button onPress={this.handleSubmit} title="Sign In" />
        <Button title="Create a account" onPress={() => navigate('RegisterScreen')} />
      </View>
    );
  }
}

export default LoginScreen;