import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FeedCard from './FeedCard';


class Feed extends Component {

  render() {
    const { navigation, events } = this.props
    return (
      <View>
        {events.map(event => {
          console.log(event)
          return <FeedCard key={event.eventText} navigation={navigation} eventText={event.eventText} />
        })}
      </View>
    );
  }
}

export default Feed;


