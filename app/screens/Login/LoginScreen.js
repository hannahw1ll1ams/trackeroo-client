import styles from './styles';
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image
} from 'react-native';
import * as api from '../../api';
import { withNavigation } from 'react-navigation';
import Typography from '../../components/Typography';
import { Input, Button } from 'react-native-elements';

class LoginScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {
    username: null,
    password: null,
    validUser: false,
    error: null
  };

  async componentDidMount() {
    const { navigate } = this.props.navigation;
    try {
      const token = await api.getToken();
      if (token) {
        api.setAuthorizationHeader(token);
        navigate('HomeScreen', { title: 'Which group to enter?' });
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (event, inputType) => {
    const { text } = event.nativeEvent;
    usernameRule = /^[a-zA-Z0-9]+$/;
    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#" {}()<>£%+='$:;%^&*])(?=.{8,})/;
    if (inputType === 'password') {
      if (passwordRule.test(text)) {
        console.log('password is valid');
        this.setState({ [inputType]: text });
      } else console.log('password is invalid');
    }
    if (inputType === 'username') {
      if (usernameRule.test(text)) {
        console.log('username is valid');
        this.setState({ [inputType]: text });
      } else console.log('username is invalid');
    }
  };

  handleSubmit = async () => {
    const { username, password, validUser } = this.state;
    const { navigate } = this.props.navigation;
    console.log(username, password);
    try {
      await api.login(username, password);
      navigate('HomeScreen', {
        username,
        password,
        title: 'Which group to enter?'
      });
    } catch (error) {
      console.log('in catch block');
      console.log(error);
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const {
      username,
      password,
      error,
      usernameValid,
      passwordValid
    } = this.state;
    if (error) return <Text>{error}</Text>;
    return (
      // <KeyboardAvoidingView bahaviour='padding' style={styles.fullSize}>
      // <ScrollView keyboardShouldPersistTaps='never' scrollEnabled={false}>

      <View style={styles.login}>
        <Text style={styles.text}>彡TᖇᗩᑕKEᖇOO</Text>

        <Image
          source={require('./running.png')}
          style={styles.backgroundImage}
        />
        <Typography style={styles.signInText}>ᒪOG Iᑎ</Typography>

        <Input
          placeholder="USERNAME"
          inputStyle={{
            color: 'gold'
          }}
          placeholderTextColor="white"
          onEndEditing={event => this.handleChange(event, 'username')}
          name="username"
          style={styles.inputStyle}
          underlineColorAndroid="gold"
        />

        <Input
          style={{ color: 'gold' }}
          inputStyle={{
            color: 'gold'
          }}
          placeholder="PASSWORD"
          placeholderTextColor="white"
          name="password"
          onEndEditing={event => this.handleChange(event, 'password')}
          style={styles.inputStyle}
          underlineColorAndroid="white"
        />

        <Typography style={styles.bottomText}>
          Password must be 8 characters long
        </Typography>
        <TouchableOpacity>
          <Button
            buttonStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
            style={styles.button}
            color="black"
            title="ᔕIGᑎ Iᑎ"
            onPress={this.handleSubmit}
          />

          <TouchableOpacity>
            <Typography
              onPress={() =>
                navigate('PasswordResetScreen', { title: 'Forgot Password' })
              }
            >
              ᖴOᖇGOT ᑭᗩᔕᔕᗯOᖇᗪ
            </Typography>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity>
          <Typography
            onPress={() => navigate('RegisterScreen', { title: 'SIGN UP' })}
          >
            ᗪOᑎ'T ᕼᗩᐯE ᗩᑎ ᗩᑕᑕOᑌᑎT?
          </Typography>
        </TouchableOpacity>
      </View>
      //</KeyboardAvoidingView>
      // </ScrollView>
      // </KeyboardAvoidingView>
    );
  }
}

export default withNavigation(LoginScreen);
