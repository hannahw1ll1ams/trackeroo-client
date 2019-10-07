import React, { Component } from "react";
// import Orientation from "react-native-orientation";
// import AllTabsNavigator from "./app/navigator/AllTabsNavigator";
import AlternativeNavigator from './app/navigator/AlternativeNavigator'

export default class App extends Component {
  // componentDidMount = () => {
  //   Orientation.lockToPortrait();
  // };


  render() {
    return <AlternativeNavigator />;
  }
}