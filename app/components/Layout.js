import React from "react";
import { View } from "react-native";

const styles = {
  backgroundColor: "#121212",
  flex: 1
};

const Layout = ({ children }) => {
  return <View style={styles}>{children}</View>;
};

export default Layout;
