import styles from "./styles";
import React, { Component, useState, useContext } from "react";
import { View, Button, TextInput, Text } from "react-native";
import * as api from "../../api";
import UserContext from "../../context/UserContext";

const RegisterScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (event, inputType) => {
    const { text } = event.nativeEvent;
    usernameRule = /^[a-zA-Z0-9]+$/;
    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#"{}( )<>£%+='$:;%^&*])(?=.{8,})/;

    if (inputType === 'username') {
      if (usernameRule.test(text)) {
        console.log("username is valid");
        setState({ ...state, [inputType]: text });
      } else console.log("username is invalid");
    }

    if (inputType === "password") {
      console.log(text);
      if (passwordRule.test(text)) {
        console.log("password is valid");
        setState({ ...state, [inputType]: text });
      } else console.log("password is invalid");
    }
  };

  const handleSubmit = async () => {
    const { username, password } = state;
    const { navigate } = navigation;
    try {
      console.log(username, password);
      const user = await api.signup(username, password);
      setUser(user);
      navigate("HomeScreen");
    } catch (error) {
      console.log(error.message, "in register catch block");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="username"
        onEndEditing={event => handleChange(event, "username")}
        name="username"
      />
      <TextInput
        placeholder="password"
        onEndEditing={event => handleChange(event, "password")}
        name="password"
      />
      <Text>
        Password must be 8 characters long, include at least one capital and
        lowercase letter, and one number
      </Text>
      <Button title="Create account and Log In" onPress={handleSubmit} />
    </View>
  );
};

export default RegisterScreen;
