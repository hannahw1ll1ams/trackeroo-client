import styles from "./styles";
import React, { Component, useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Image,
  Header,
  AsyncStorage
} from "react-native";
import * as api from "../../api";
import { withNavigation } from "react-navigation";
import Typography from "../../components/Typography";
import { Input, Button } from "react-native-elements";
import UserContext from "../../context/UserContext";

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    validUser: false,
    error: null
  });

  const { user, setUser } = useContext(UserContext);

  const checkLogin = async () => {
    const { navigate } = navigation;
    try {
      const token = await api.getToken();
      if (token) {
        api.setAuthorizationHeader(token);
        console.log("rsss", user);
        const username = await AsyncStorage.getItem("username");

        const actualUser = await api.getUser(username);
        console.log("actual", actualUser);

        setUser(actualUser);
        navigate("HomeScreen");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (event, inputType) => {
    const { text } = event.nativeEvent;
    usernameRule = /^[a-zA-Z0-9]+$/;
    passwordRule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!?/[/@#" {}()<>£%+='$:;%^&*])(?=.{8,})/;
    if (inputType === "password") {
      if (passwordRule.test(text)) {
        console.log("password is valid");
        setState({ ...state, [inputType]: text });
      } else {
        console.log("password is invalid");
        Alert.alert('Incorrect Password', "Password should contain at least 8 characters, including 1 number and 1 capital letter", [
          {
            text: 'Cancel',
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: 'Ok',
            onPress: () => console.log("Ok Pressed"),
          }
        ], { cancelable: false })
      }
    }
    if (inputType === "username") {
      if (usernameRule.test(text)) {
        console.log("username is valid");
        setState({ ...state, [inputType]: text });
      } else console.log("username is invalid");
    }
  };

  const handleSubmit = async () => {
    const { username, password, validUser } = state;
    const { navigate } = navigation;
    if (!password) {

    }
    try {
      const user = await api.login(username, password);
      console.log("got a users", user);
      setUser(user);
      await AsyncStorage.setItem("username", user.username);
      navigate("HomeScreen", {
        username,
        password
      });
    } catch (error) {
      console.log(username, password);
      console.log("in catch block");
      console.log(error);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const { navigate } = navigation;

  const { username, password, error, usernameValid, passwordValid } = state;
  if (error) return <Text>{error}</Text>;
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
      <View style={styles.container}>
        <Text style={styles.text}>彡TᖇᗩᑕK•ᗩ•ᖇOO</Text>

        <Image source={require("./rubyroo.png")} style={styles.backgroundImage} />
        <Typography style={styles.signInText}>ᒪOG Iᑎ</Typography>

        <Input
          placeholder="USERNAME"
          inputStyle={{
            color: 'gold'
          }}
          placeholderTextColor="white"
          onEndEditing={event => handleChange(event, 'username')}
          name="username"
          labelStyle={{ color: 'black' }}
          containerStyle={{
            backgroundColor: '#202020',
            width: 300,
            borderRadius: 5,
            marginTop: 5,
            height: 43
          }}
        />

        <Input
          style={{ color: 'gold' }}
          inputStyle={{
            color: 'gold'
          }}
          placeholder="PASSWORD"
          placeholderTextColor="white"
          name="password"
          onEndEditing={event => handleChange(event, 'password')}
          labelStyle={{ color: 'black' }}
          containerStyle={{
            backgroundColor: '#202020',
            width: 300,
            borderRadius: 5,
            marginTop: 5,
            height: 43
          }}
        />

        <Typography style={styles.bottomText}>
          Password must be 8 characters long
      </Typography>
        <TouchableOpacity>
          <Button
            buttonStyle={{
              backgroundColor: '#FF8000'
            }}
            style={styles.button}
            titleStyle={{ color: 'black' }}

            color="black"
            title="SIGᑎ Iᑎ"
            onPress={handleSubmit}
          />

          <TouchableOpacity>
            <Typography
              onPress={() =>
                navigate("PasswordResetScreen", { title: "Forgot Password" })
              }
            >
              FORGOT PASSWORD
          </Typography>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity>
          <Typography onPress={handleSubmit}>SIGN IN</Typography>
        </TouchableOpacity>
        <TouchableOpacity>
          <Typography
            onPress={() => navigate("RegisterScreen", { title: "SIGN UP" })}
          >
            DON'T HAVE A ACCOUNT?
        </Typography>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default withNavigation(LoginScreen);
