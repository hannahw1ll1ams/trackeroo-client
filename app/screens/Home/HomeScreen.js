import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import * as api from "../../api";
import Feed from "../../components/Feed";
import Typography from "../../components/Typography";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  state = {
    isLoading: true
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

  render() {
    const { navigate } = this.props.navigation;

    // const { isLoading } = this.state;
    // if (isLoading) return <ActivityIndicator size="small" color="#00ff00" />
    return (
      <View style={styles.container}>
        <Typography>This is the HomeScreen.</Typography>
        <Text>
          Username :{" "}
          {JSON.stringify(
            this.props.navigation.getParam("username", "NO-username")
          )}
        </Text>
        <Text>
          Password :{" "}
          {JSON.stringify(
            this.props.navigation.getParam("password", "NO-password")
          )}
        </Text>
        <Text>
          GroupName :{" "}
          {JSON.stringify(
            this.props.navigation.getParam("groupName", "no-group")
          )}
        </Text>
        {/* <Feed navigation={this.props.navigation} /> */}
        <Button title="Actually, sign me out" onPress={this.handleSignOut} />
      </View>
    );
  }
}

export default HomeScreen;
