import styles from "./styles";
import React, { Component, useState, useContext } from "react";
import { Text, View, Button } from "react-native";
import * as api from "../../api";
import Typography from "../../components/Typography";
import MapView, { Marker, Polyline } from "react-native-maps";
import UserContext from "../../context/UserContext";
const run = {
  average_speed: 0.345408510727187,
  coordinates:
    '{"run":[{"latitude":53.4860612,"longitude":-2.2397821},{"latitude":53.4860551,"longitude":-2.2397887},{"latitude":53.4860562,"longitude":-2.2397748},{"latitude":53.486054,"longitude":-2.2397529},{"latitude":53.4860888,"longitude":-2.2398231},{"latitude":53.4861439,"longitude":-2.2398979},{"latitude":53.4861884,"longitude":-2.2399493},{"latitude":53.4861875,"longitude":-2.2399544},{"latitude":53.4861828,"longitude":-2.2399505},{"latitude":53.4861179,"longitude":-2.239879},{"latitude":53.4861096,"longitude":-2.2398689},{"latitude":53.4861078,"longitude":-2.2398564},{"latitude":53.4861024,"longitude":-2.2398417},{"latitude":53.4861005,"longitude":-2.2398373},{"latitude":53.4861012,"longitude":-2.2398393},{"latitude":53.4860969,"longitude":-2.2398347},{"latitude":53.4860911,"longitude":-2.2398262},{"latitude":53.4860894,"longitude":-2.2398249},{"latitude":53.486087,"longitude":-2.2398213},{"latitude":53.4860759,"longitude":-2.2398006},{"latitude":53.4860714,"longitude":-2.2397924},{"latitude":53.4860687,"longitude":-2.2397876},{"latitude":53.4860699,"longitude":-2.2397823}]}',
  finish_time: "1570721151331",
  latitude: 53.4860699,
  longitude: -2.2397823,
  run_id: "4ea64712-f65a-475c-bfcc-492784560b23",
  start_time: "1570721068895",
  total_distance: 0.041511266999699516,
  username: "Bob"
};

console.log("parser", JSON.parse(run.coordinates));

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
