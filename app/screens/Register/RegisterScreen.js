import styles from './styles';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import * as api from '../../api';
import Typography from '../../components/Typography';
import { Input, Button } from 'react-native-elements';

class RegisterScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: '#61469C'
      }
    };
  };
  state = {
    newUser: {},
    firstName: null,
    lastName: null,
    username: null,
    password: null,
    age: 0,
    height: 0,
    weight: 0,
    validUser: false,
    error: null
  };

  handleChange = (event, inputType) => {
    const { text } = event.nativeEvent;
    usernameRule = /^[a-zA-Z0-9]+$/;
    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#"{}( )<>£%+='$:;%^&*])(?=.{8,})/;

    if (inputType === 'username') {
      if (usernameRule.test(text)) {
        console.log('username is valid');
        this.setState({ [inputType]: text });
      } else console.log('username is invalid');
    }

    if (inputType === 'password') {
      if (passwordRule.test(text)) {
        console.log('password is valid');
        this.setState({ [inputType]: text });
      } else console.log('password is invalid');
    }
  };

  handleSubmit = async () => {
    const { username, password } = this.state;
    const { navigate } = this.props.navigation;
    try {
      await api.signup(username, password);
      navigate('HomeScreen', { username, password, title: 'Home' });
    } catch (error) {
      console.log('in register catch block');
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const { username, password } = this.state;
    return (
      <View style={styles.register}>
        <ImageBackground
          source={require('./gale.jpg')}
          style={styles.backgroundImage}
        >
          <Input
            placeholder="Username:"
            placeholderTextColor="white"
            onEndEditing={event => this.handleChange(event, 'username')}
            underlineColorAndroid="black"
          />

          <Input
            placeholder="Password:"
            placeholderTextColor="white"
            onEndEditing={event => this.handleChange(event, 'password')}
            underlineColorAndroid="black"
          />

          <Typography>
            Password must be 8 characters long, include at least one capital and
            lowercase letter, and one number
          </Typography>
          <TouchableOpacity style={styles.signup_button}>
            <Button
              style={styles.button}
              title="Register"
              onPress={this.handleSubmit}
            >
              Create
            </Button>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default RegisterScreen;
