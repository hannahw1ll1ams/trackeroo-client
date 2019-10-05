import React, { Component } from 'react';
import { Button } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';


class ToggleButton extends Component {
  render() {
    const { navigation } = this.props
    return (
      <Button title="=" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
    );
  }
}

export default ToggleButton;