import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FeedCard from './FeedCard';


class Feed extends Component {
  state = {

  }
  render() {
    const { navigation, events } = this.props
    return (
      <View>
        {events.map(event => {
          return <FeedCard navigation={navigation} />
        })}
      </View>
    );
  }
}

export default Feed;


