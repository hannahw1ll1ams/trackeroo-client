import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import styles from '../screens/MapView/SharedStyles'


class AlternativeStopWatch extends Component {

  state = {
    isTimerStart: false,
    isStopwatchStart: false,
    timerDuration: 90000,
    resetTimer: false,
    resetStopwatch: false
  };

  startStopStopWatch = () => {
    this.setState({
      isStopwatchStart: !this.state.isStopwatchStart,
      resetStopwatch: false
    });
  }

  resetStopwatch = () => {
    this.setState({ isStopwatchStart: false, resetStopwatch: true });
  };

  getFormattedTime = time => {
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
          // options={options}
          // //options for the styling
          getTime={this.getFormattedTime}
        />
        <Button title={!this.state.isStopwatchStart ? 'START' : 'STOP'} onPress={this.startStopStopWatch} />
        <Button title='RESET' onPress={this.resetStopwatch} />
      </View>
    );
  }
}

export default AlternativeStopWatch;