import React, { Component } from "react";
// import Orientation from "react-native-orientation";
import Navigator from "./app/navigator/Navigator";
import * as api from "./app/api";
import Layout from "./app/components/Layout";
import { FontProvider } from "./app/context/FontContext";
import { RunsProvider } from "./app/context/RunsContext";
import { AuthenticationProvider } from "./app/context/AuthenticationContext";
import { UserProvider } from "./app/context/UserContext";

export default class App extends Component {
  addRuns = runs => {
    if (Array.isArray(runs)) {
      this.setState(currentState => ({
        runs: [...currentState.runs, ...runs]
      }));
    } else {
      this.setState(currentState => ({ runs: [...currentState.runs, runs] }));
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
    this.setState({ hasFontLoaded: true });
    // await api.storeToken("token", "adadd");
    await api.storeToken("token", "");
    // Orientation.lockToPortrait();
  };

  render() {
    const { hasFontLoaded, user } = this.state;
    return (
      <Layout>
        <UserProvider value={user}>
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
