import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import styles from '../screens/MapView/SharedStyles';


class AlternativeStopWatch extends Component {

  state = {
    isStopwatchStart: false,
    timerDuration: 90000,
    resetStopwatch: false,
    endTime: ''
  };

  startStopStopWatch = (event) => {

    const { updateActivityStatus } = this.props
    console.log(event)


    this.setState({
      isStopwatchStart: !this.state.isStopwatchStart,
      resetStopwatch: false
    }, () => {
      updateActivityStatus(this.state.isStopwatchStart, this.state.endTime)
    });
    //on start, send a notification up to feed, to update events to this person started a run, and include a type of event, if started a run then have the onPress method be to navigate to map, 
    //if event that someone has created a reward, then update the feed to say the logged in person has created a reward
    //if event = stopped run etc
  }

  resetStopwatch = () => {
    this.setState({ isStopwatchStart: false, resetStopwatch: true });
  };

  getFormattedTime = time => {
    // console.log(time)
    this.currentTime = time;
  };


  render() {
    return (
      <View style={styles.stopwatch}>
        <Stopwatch
          laps
          msecs
          start={this.state.isStopwatchStart}
          //To start
          reset={this.state.resetStopwatch}
          //To reset
          options={options}
          // //options for the styling
          getTime={this.getFormattedTime}
        />
        <Button title={!this.state.isStopwatchStart ? 'START' : 'STOP'} onPress={(event) => this.startStopStopWatch(event)} />
        <Button title='RESET' onPress={this.resetStopwatch} />
      </View>
    );
  }
}

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7
  }
};

export default AlternativeStopWatch;