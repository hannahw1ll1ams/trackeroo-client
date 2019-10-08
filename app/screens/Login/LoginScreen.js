import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import * as api from "../../api";
import { withNavigation } from "react-navigation";
import Typography from "../../components/Typography";

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
      // const token = await api.getToken();
      const token = 'fdnsfjs'
      if (token) {
        navigate("GroupsScreen", { title: "Which group to enter?" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (event, inputType) => {
    const { text } = event.nativeEvent;
    usernameRule = /^[a-zA-Z0-9]+$/;
    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#" {}()<>£%+='$:;%^&*])(?=.{8,})/;
    if (inputType === "password") {
      if (passwordRule.test(text)) {
        console.log("password is valid");
        this.setState({ [inputType]: text });
      } else console.log("password is invalid");
    }
    if (inputType === "username") {
      if (usernameRule.test(text)) {
        console.log("username is valid");
        this.setState({ [inputType]: text });
      } else console.log("username is invalid");
    }
  };

  handleSubmit = async () => {
    const { username, password, validUser } = this.state;
    const { navigate } = this.props.navigation;
    console.log(username, password);
    try {
      await api.login(username, password);
      navigate("HomeScreen", {
        username,
        password,
        title: "Which group to enter?"
      });
    } catch (error) {
      console.log("in catch block");
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
      <View style={styles.container}>
        <Typography style={styles.signInText}>Trackeroo</Typography>
        <TextInput
          style={styles.textInput}
          placeholder="username"
          onEndEditing={event => this.handleChange(event, "username")}
          name="username"
          style={styles.inputStyle}
          underlineColorAndroid='white'
        />
        <TextInput
          placeholder="password"
          name="password"
          onEndEditing={event => this.handleChange(event, "password")}
          style={styles.inputStyle}
          underlineColorAndroid='white'

        />
        <Typography style={styles.bottomText}>
          Password must be 8 characters long
        </Typography>
        <TouchableOpacity>
          <Typography onPress={() =>
            navigate("PasswordResetScreen", { title: "Forgot Password" })
          }>Forgot Password</Typography>
        </TouchableOpacity>
        <TouchableOpacity>
          <Typography onPress={this.handleSubmit}>Sign In</Typography>
        </TouchableOpacity>
        <TouchableOpacity>
          <Typography onPress={() =>
            navigate("RegisterScreen", { title: "SIGN UP" })
          }>Don't have a account?</Typography>
        </TouchableOpacity>
      </View>
      // </ScrollView>
      // </KeyboardAvoidingView>
    );
  }
}

export default withNavigation(LoginScreen);
