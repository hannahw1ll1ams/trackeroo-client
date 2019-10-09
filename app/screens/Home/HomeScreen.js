import styles from "./styles";
import React, { Component, useState, useContext } from "react";
import { Text, View, Button } from "react-native";
import * as api from "../../api";
import Typography from "../../components/Typography";
import MapView, { Marker, Polyline } from "react-native-maps";
import UserContext from "../../context/UserContext";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext);

  handleSignOut = async () => {
    const { navigate } = navigation;
    try {
      await api.logout();
      navigate("LoginScreen", { title: "Sign In" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Typography>This is the HomeScreen.</Typography>
      <Typography>You are: {user.username}</Typography>
      <Button title="Actually, sign me out" onPress={this.handleSignOut} />
    </View>
  );
};

export default HomeScreen;
