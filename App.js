import React, { Component } from "react";
// import Orientation from "react-native-orientation";
import Navigator from "./app/navigator/Navigator";
import * as api from "./app/api";
import Layout from "./app/components/Layout";
import { FontProvider } from "./app/context/FontContext";
import { RunsProvider } from "./app/context/RunsContext";
import { AuthenticationProvider } from "./app/context/AuthenticationContext";
import { UserProvider } from "./app/context/UserContext";
import { AsyncStorage } from "react-native";

export default class App extends Component {
  addRuns = runs => {
    if (Array.isArray(runs)) {
      this.setState(currentState => ({
        runs: [...currentState.runs, ...runs]
      }));
    } else {
      // if run item already exists, it's an update
      const runExists = this.state.runs.some(r => r.run_id === runs.run_id);
      if (runExists) {
        this.setState(currentState => ({
          runs: currentState.runs.map(r => {
            r.run_id === runs.run_id;
          })
        }));
      } else {
        this.setState(currentState => ({
          runs: [...currentState.runs, runs]
        }));
      }
    }
  };

  setUser = user => {
    this.setState({ user });
  };

  state = {
    runs: [],
    addRuns: this.addRuns,
    hasFontLoaded: false,
    user: {},
    setUser: this.setUser
  };

  componentDidMount = async () => {
    await api.loadFonts();
    try {
      const username = await AsyncStorage.getItem("username");
      this.setState({ hasFontLoaded: true, user: { username } });
    } catch (err) {
      this.setState({ hasFontLoaded: true });
    }
    // await api.storeToken("token", "");
    // await api.storeToken("token", "adadd");
    // Orientation.lockToPortrait();
  };

  render() {
    const { hasFontLoaded, user } = this.state;
    return (
      <Layout>
        <UserProvider value={this.state}>
          <FontProvider value={hasFontLoaded}>
            <RunsProvider value={this.state}>
              <Navigator />
            </RunsProvider>
          </FontProvider>
        </UserProvider>
      </Layout>
    );
  }
}
