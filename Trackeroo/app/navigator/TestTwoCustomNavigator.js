import React from 'react'
import { FeedNavigator } from './TestTwoFeedNavigator'

class CustomReactNavigationNavigator extends React.Component {
  static router = FeedNavigator.router

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
