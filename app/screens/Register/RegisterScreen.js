import styles from "./styles";
import React, { Component } from "react";
import { View, Button, TextInput, Text } from "react-native";
import * as api from "../../api";

class RegisterScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
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

    if (inputType === "username") {
      if (usernameRule.test(text)) {
        console.log("username is valid");
        this.setState({ [inputType]: text });
      } else console.log("username is invalid");
    }

    if (inputType === "password") {
      if (passwordRule.test(text)) {
        console.log("password is valid");
        this.setState({ [inputType]: text });
      } else console.log("password is invalid");
    }
  };

  handleSubmit = async () => {
    const { username, password } = this.state;
    const { navigate } = this.props.navigation;
    try {
      await api.signup(username, password);
      navigate("HomeScreen", { username, password, title: "Home" });
    } catch (error) {
      console.log("in register catch block");
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const { username, password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="username"
          onEndEditing={event => this.handleChange(event, "username")}
          name="username"
        />
        <TextInput
          placeholder="password"
          onEndEditing={event => this.handleChange(event, "password")}
          name="password"
        />
        <Text>
          Password must be 8 characters long, include at least one capital and
          lowercase letter, and one number
        </Text>
        <Button title="Create account and Log In" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default RegisterScreen;
