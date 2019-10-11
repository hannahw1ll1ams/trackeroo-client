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

  console.log(user);

  handleSignOut = async () => {
    const { navigate } = navigation;
    try {
      await api.logout();
      navigate("LoginScreen", { title: "Sign In" });
    } catch (error) {
      console.log(error);
    }
  };

  const { username, cumulative_distance } = user;

  return (
    <View style={styles.container}>
      <Typography>{username}</Typography>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end"
        }}
      >
        <Typography color="accent" fontSize={100} fontWeight={700}>
          {cumulative_distance}
        </Typography>
        <View style={{ marginBottom: 22, marginLeft: 5 }}>
          <Typography color="primary" fontSize={20}>
            km
          </Typography>
        </View>
      </View>
      <Button title="Logout" onPress={this.handleSignOut} />
    </View>
  );
};

export default HomeScreen;
