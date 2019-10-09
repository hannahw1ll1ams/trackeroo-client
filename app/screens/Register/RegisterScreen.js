import styles from './styles';
import React, { Component, useState, useContext } from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { Input } from 'react-native-elements';
import * as api from '../../api';
import UserContext from '../../context/UserContext';
import Typography from '../../components/Typography';

const RegisterScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [state, setState] = useState({ username: '', password: '' });

  const handleChange = (event, inputType) => {
    const { text } = event.nativeEvent;
    usernameRule = /^[a-zA-Z0-9]+$/;
    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#"{}( )<>£%+='$:;%^&*])(?=.{8,})/;

    if (inputType === 'username') {
      if (usernameRule.test(text)) {
        console.log('username is valid');
        setState({ ...state, [inputType]: text });
      } else console.log('username is invalid');
    }

    if (inputType === 'password') {
      console.log(text);
      if (passwordRule.test(text)) {
        console.log('password is valid');
        setState({ ...state, [inputType]: text });
      } else console.log('password is invalid');
    }
  };

  const handleSubmit = async () => {
    const { username, password } = state;
    const { navigate } = navigation;
    try {
      console.log(username, password);
      const user = await api.signup(username, password);
      setUser(user);
      navigate('HomeScreen');
    } catch (error) {
      console.log(error.message, 'in register catch block');
    }
  };

  const { navigate } = navigation;
  const { username, password } = state;
  return (
    <View style={styles.register}>
      <ImageBackground
        source={require('./road.jpg')}
        style={styles.backgroundImage}
      >
        <Input
          style={styles.input}
          inputStyle={{ color: 'white' }}
          placeholder="Username:"
          placeholderTextColor="white"
          onEndEditing={event => handleChange(event, 'username')}
          underlineColorAndroid="black"
        />

        <Input
          style={styles.input}
          inputStyle={{ color: 'white' }}
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
          <Button style={styles.button} title="Register" onPress={handleSubmit}>
            Create
          </Button>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;
