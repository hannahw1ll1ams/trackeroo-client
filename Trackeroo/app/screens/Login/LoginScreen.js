import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
// import * as api from '../../../api'


//need to type in username and password
//validates client side after change each box
//if valid, send api request to db
// db either finds user and sends back true and then we navigate to home page, pass through username on props.
//or db doesn't find, sends back false and we display the error of user does not exist.

//would it not be better that if already doing a request that just get back the whole object then can pass it down.

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


  handleSubmit = () => {
    const { username, password, validUser } = this.state
    const { navigate } = this.props.navigation;
    console.log(username, password)
    // api.checkExistingUser(username, password).then((boolean) => {
    //   this.setState({ validUser: boolean })
    // })
    //   .catch(error => {
    //     this.setState({
    //       error
    //     })
    //   })
    // if (validUser) {
    navigate('GroupsScreen', { username, password, title: 'Which group to enter?' })
    // this.setState({ username: '', password: '' })
    // }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { username, password, error, usernameValid, passwordValid } = this.state
    if (error) return <Text>{error}</Text>
    return (
      <View style={styles.container}>
        <Text> Sign Up</Text>
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

export default LoginScreen;