import React from 'react'
import { DrawerNavigator } from './TestOneDrawerNavigatorState'

class CustomReactNavigationNavigator extends React.Component {
  static router = DrawerNavigator.router

  state = {
  }

  componentDidMount = () => {
  }

  render() {
    const { navigation } = this.props

    return (
      <DrawerNavigator
        navigation={navigation}
      />
    )
  }
}

export default CustomReactNavigationNavigator
