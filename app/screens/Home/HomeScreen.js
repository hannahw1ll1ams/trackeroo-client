import styles from "./styles";
import React, { Component, useState, useContext, useEffect } from "react";
import { Text, View, Button } from "react-native";
import * as api from "../../api";
import Typography from "../../components/Typography";
import MapView, { Marker, Polyline } from "react-native-maps";
import UserContext from "../../context/UserContext";
import HomeList from "../../components/HomeList";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pastRuns, setPastRuns] = useState([]);
  const [region, setRegion] = useState({
    latitude: 53.486102,
    longitude: -2.236313,
    longitudeDelta: 0.02,
    latitudeDelta: 0.02
  });
  const { user } = useContext(UserContext);
  const fetchRuns = async () => {
    const runs = await api.getMyRuns(user.username);
    setPastRuns(runs);
  };
  useEffect(() => {
    fetchRuns();
  }, []);

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
      {/* <Button title="Signout" onPress={handleSignOut} /> */}
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
      <Button title="Logout" onPress={handleSignOut} />

      <MapView
        style={styles.map}
        showsUserLocation
        followsUserLocation
        initialRegion={region}
      >
        <View>
          {pastRuns.map(runObj => {
            if (runObj.coordinates) {
              const { latitude, longitude } = JSON.parse(
                runObj.coordinates
              ).run[0];
              return (
                <Marker
                  key={runObj.run_id}
                  coordinate={{
                    latitude,
                    longitude
                  }}
                  title="start"
                  description="woo"
                />
              );
            } else return null;
          })}
          {pastRuns.map(runObj => {
            if (runObj.coordinates) {
              // const { latitude, longitude } =
              return (
                <Polyline
                  key={runObj.run_id}
                  coordinates={JSON.parse(runObj.coordinates).run}
                />
              );
            }
          })}
        </View>
      </MapView>

      <HomeList runs={pastRuns} />
    </View>
  );
};

export default HomeScreen;
