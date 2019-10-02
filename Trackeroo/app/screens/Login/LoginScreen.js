import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
// import * as api from '../../../api'


class LoginScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "TRACKEROO"
  });
  state = {
    username: null,
    password: null,
    validUser: false,
    error: null
  }

  handleUsernameChange = (e) => {
    const { text } = e.nativeEvent
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
    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#"{}()<>£%+='$:;%^&*])(?=.{8,})/;
    if (passwordRule.test(text)) {
      console.log('password is valid')
      this.setState({ password: text })
    }
    else
      console.log('password is invalid')
  }


  handleChange = (event, inputType) => {
    const { text } = event.nativeEvent
    usernameRule = /^[a-zA-Z0-9]+$/
    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#"{}()<>£%+='$:;%^&*])(?=.{8,})/;
    //need to add to check for spaces and improve testing for special characters
    if (inputType === 'password') {
      if (passwordRule.test(text)) {
        console.log('password is valid')
        this.setState({ [inputType]: text })
      }
      else
        console.log('password is invalid')
    }
    if (inputType === 'username') {
      if (usernameRule.test(text)) {
        console.log('username is valid')
        this.setState({ [inputType]: text })
      }
      else
        console.log('username is invalid')
    }

  }


  handleSubmit = () => {
    const { username, password, validUser } = this.state
    const { navigate } = this.props.navigation;
    // api.checkExistingUser(username, password).then((boolean) => {
    //   this.setState({ validUser: boolean })
    // })
    //   .catch(error => {
    //     this.setState({
    //       error
    //     })
    //   })
    // if (validUser) {
    navigate('HomeScreen', { username, password, title: 'Home' })
    // }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { username, password, error } = this.state
    if (error) return <Text>{error}</Text>
    return (
      <View style={styles.container}>
        <Text> Sign Up</Text>
        <TextInput placeholder='username' onEndEditing={(event) => this.handleChange(event, 'username')} name='username'
        />
        <TextInput placeholder='password' name='password' onEndEditing={(event) => this.handleChange(event, 'password')}
        />
        <Button title="Sign In" onPress={this.handleSubmit} />
        <Button title="Don't have a account?" onPress={() => navigate('RegisterScreen', { title: 'Create a account' })} />
      </View>
    );
  }
}

export default LoginScreen;