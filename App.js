import React, { Component } from "react";
// import Orientation from "react-native-orientation";
import Navigator from "./app/navigator/Navigator";
import * as api from "./app/api";
import Layout from "./app/components/Layout";
import { FontProvider } from "./app/context/FontContext";
import { RunsProvider } from "./app/context/RunsContext";
import { AuthenticationProvider } from "./app/context/AuthenticationContext";

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

  state = {
    runs: [],
    addRuns: this.addRuns,
    hasFontLoaded: false
  };

  componentDidMount = async () => {
    await api.loadFonts();
    this.setState({ hasFontLoaded: true });
    await api.storeToken("token", "adadd");
    // Orientation.lockToPortrait();
  };

  render() {
    const { hasFontLoaded } = this.state;
    return (
      <Layout>
        <FontProvider value={hasFontLoaded}>
          <RunsProvider value={this.state}>
            <Navigator />
          </RunsProvider>
        </FontProvider>
      </Layout>
    );
  }
}
