import React, { Component } from "react";
// import Orientation from "react-native-orientation";
import Navigator from "./app/navigator/Navigator";
import * as api from './api'

export default class App extends Component {
  // componentDidMount = () => {
  //   Orientation.lockToPortrait();
  // };


  render() {
    return <Navigator />;
  }
}