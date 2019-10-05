import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';


class Header extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Button title="=" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
        <Text>Trackaroo</Text>
        <Button
          onPress={() => alert('This is a button!')}
          title="GO"
        />
      </View>
    );
  }
}

export default Header;


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    position: "absolute"
  }
});
