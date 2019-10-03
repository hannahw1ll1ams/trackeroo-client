import styles from './styles';
import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

class RegisterScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  };
  state = {
    firstName: null,
    lastName: null,
    username: null,
    password: null,
    age: 0,
    height: 0,
    weight: 0,
    validUser: false,
    error: null
  }

  handleChange = (event, inputType) => {
    const { text } = event.nativeEvent
    console.log(text, inputType)
    firstNameRule = /^[a-zA-Z]+$/
    lastNameRule = /^[a-zA-Z]+$/
    ageRule = /^[0-9]{1,3}$/
    heightRule = /^[0-9]{1,3}$/
    weightRule = /^[0-9]{1,3}$/
    usernameRule = /^[a-zA-Z0-9]+$/
    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#"{}()<>£%+='$:;%^&*])(?=.{8,})/;

    if (inputType === 'firstName') {
      if (firstNameRule.test(text)) {
        console.log('firstName is valid')
        this.setState({ [inputType]: text })
      }
      else
        console.log('firstName is invalid')
    }

    if (inputType === 'lastName') {
      if (lastNameRule.test(text)) {
        console.log('lastName is valid')
        this.setState({ [inputType]: text })
      }
      else
        console.log('lastName is invalid')
    }

    if (inputType === 'age') {
      if (ageRule.test(text)) {
        console.log('age is valid')
        this.setState({ [inputType]: text })
      }
      else
        console.log('age is invalid')
    }

    if (inputType === 'height') {
      if (heightRule.test(text)) {
        console.log('height is valid')
        this.setState({ [inputType]: text })
      }
      else
        console.log('height is invalid')
    }

    if (inputType === 'weight') {
      if (weightRule.test(text)) {
        console.log('weight is valid')
        this.setState({ [inputType]: text })
      }
      else
        console.log('weight is invalid')
    }

    if (inputType === 'username') {
      if (usernameRule.test(text)) {
        console.log('username is valid')
        this.setState({ [inputType]: text })
      }
      else
        console.log('username is invalid')
    }

    if (inputType === 'password') {
      if (passwordRule.test(text)) {
        console.log('password is valid')
        this.setState({ [inputType]: text })
      }
      else
        console.log('password is invalid')
    }

  }

  render() {
    const { navigate } = this.props.navigation;
    const { username, password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput placeholder='first name' onEndEditing={(event) => this.handleChange(event, 'firstName')} name='firstName'
        />
        <TextInput placeholder='last name' onEndEditing={(event) => this.handleChange(event, 'lastName')} name='lastName'
        />
        <TextInput placeholder='age' onEndEditing={(event) => this.handleChange(event, 'age')} name='age'
        />
        <TextInput placeholder='height' onEndEditing={(event) => this.handleChange(event, 'height')} name='height'
        />
        <TextInput placeholder='weight' onEndEditing={(event) => this.handleChange(event, 'weight')} name='weight'
        />
        <TextInput placeholder='username' onEndEditing={(event) => this.handleChange(event, 'username')} name='username'
        />
        <TextInput placeholder='password' onEndEditing={(event) => this.handleChange(event, 'password')} name='password'
        />
        <Button title="Create account and Log In" onPress={() => navigate('HomeScreen', { username: username, password: password, otherParam: 'Home' })} />
      </View>
    );
  }
}

export default RegisterScreen;