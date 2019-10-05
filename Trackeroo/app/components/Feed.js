import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FeedCard from './FeedCard';


class Feed extends Component {
  state = {

  }
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>{navigation.getParam('groupName')}'s FEED</Text>
        <FeedCard navigation={navigation} />
      </View>
    );
  }
}

export default Feed;