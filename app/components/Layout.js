import React from "react";
import { View, Platform, StatusBar } from "react-native";

const styles = {
  paddingTop: StatusBar.currentHeight,
  backgroundColor: "#121212",
  flex: 1
};

const Layout = ({ children }) => {
  return <View style={styles}>{children}</View>;
};

export default Layout;
