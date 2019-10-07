import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import * as api from "../../api";
import Feed from "../../components/Feed";
import Typography from "../../components/Typography";
import MapView, { Marker, Polyline } from 'react-native-maps';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  state = {
    isLoading: true,
    // isMapTrue: false,
    // showSpecificRun: false,
    // specificRun: '',
    // pastRuns: [
    //   [{ latitude: 53.192014, longitude: -2.895863 }, { latitude: 53.191860, longitude: -2.895772 }, { latitude: 53.191799, longitude: -2.895954 }, { latitude: 53.191941, longitude: -2.896062 }, { latitude: 53.191899, longitude: -2.896346 }, { latitude: 53.191867, longitude: -2.896635 }, { latitude: 53.191876, longitude: -2.896807 }],

    //   [{ latitude: 53.192240, longitude: -2.896228 }, { latitude: 53.192223, longitude: -2.896571 }, { latitude: 53.192211, longitude: -2.896850 }, { latitude: 53.192420, longitude: -2.896915 }, { latitude: 53.192516, longitude: -2.896700 }, { latitude: 53.192397, longitude: -2.896657 }, { latitude: 53.192342, longitude: -2.897178 }]]
  };

  handleSignOut = async () => {
    const { navigate } = this.props.navigation;
    try {
      await api.logout();
      navigate("LoginScreen", { title: "Sign In" });
    } catch (error) {
      console.log(error);
    }
  };

  // onMapLayout = () => {
  //   this.setState({ isMapTrue: true })
  // }

  // onPress = (event, runNumber) => {
  //   console.log(event, runNumber)
  //   if (runNumber === 'all') {
  //     this.setState({ showSpecificRun: false, specificRun: '' })
  //   }
  //   else {
  //     this.setState({ showSpecificRun: true, specificRun: runNumber })
  //   }
  // }

  render() {
    const { navigate } = this.props.navigation;
    // const { pastRuns, showSpecificRun, specificRun, isMapTrue } = this.state;

    // const { isLoading } = this.state;
    // if (isLoading) return <ActivityIndicator size="small" color="#00ff00" />
    return (
      <View style={styles.container}>

        <Typography>This is the HomeScreen.</Typography>
        <Typography>
          You are :{" "}
          {JSON.stringify(
            this.props.navigation.getParam("username", "NO-username")
          )}
        </Typography>
        <Text>
          Password :{" "}
          {JSON.stringify(
            this.props.navigation.getParam("password", "NO-password")
          )}
        </Text>
        {/* <Feed navigation={this.props.navigation} /> */}
        <Button title="Actually, sign me out" onPress={this.handleSignOut} />
      </View>
    );
  }
}

export default HomeScreen;
