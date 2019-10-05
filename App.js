import React, { Component } from "react";
// import Orientation from "react-native-orientation";
import Navigator from "./app/navigator/Navigator";
import * as api from "./app/api";
import Layout from "./app/components/Layout";
import { FontProvider } from "./app/context/FontContext";

export default class App extends Component {
  state = {
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
          <Navigator />
        </FontProvider>
      </Layout>
    );
  }
}
