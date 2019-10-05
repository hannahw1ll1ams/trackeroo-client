import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import * as api from '../../../api'
import { withNavigation } from 'react-navigation';


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

  async componentDidMount() {
    const { navigate } = this.props.navigation;
    try {
      const token = await api.getToken()
      if (token) {
        navigate('GroupsScreen', { title: 'Which group to enter?' })
      }
    } catch (error) {
      console.log(error)
    }
  }


  handleChange = (event, inputType) => {
    const { text } = event.nativeEvent
    usernameRule = /^[a-zA-Z0-9]+$/
    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#" {}()<>£%+='$:;%^&*])(?=.{8,})/;
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


  handleSubmit = async () => {
    const { username, password, validUser } = this.state
    const { navigate } = this.props.navigation;
    console.log(username, password)
    try {
      await api.login(username, password)
      navigate('GroupsScreen', { username, password, title: 'Which group to enter?' })
    }
    catch (error) {
      console.log('in catch block')
      console.log(error)
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    const { username, password, error, usernameValid, passwordValid } = this.state
    if (error) return <Text>{error}</Text>
    return (
      <View style={styles.container}>
        <Text> Sign In</Text>
        <TextInput placeholder='username' onEndEditing={(event) => this.handleChange(event, 'username')} name='username' style={styles.inputStyle}
        />
        <TextInput placeholder='password' name='password' onEndEditing={(event) => this.handleChange(event, 'password')} style={styles.inputStyle}
        />
        <Text style={styles.bottomText}>Password must be 8 characters long</Text>
        <Button title="Forgot Password" onPress={() => navigate('PasswordResetScreen', { title: 'Change your password' })} />
        <Button title="Sign In" onPress={this.handleSubmit} />
        <Button title="Don't have a account?" onPress={() => navigate('RegisterScreen', { title: 'Create a account' })} />
      </View>
    );
  }
}

export default withNavigation(LoginScreen);