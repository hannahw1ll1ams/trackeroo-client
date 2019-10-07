/*This is an Example of Timer/Stopwatch in React Native */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

class App extends Component {
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
  };
  resetStopwatch = () => {
    this.setState({ isStopwatchStart: false, resetStopwatch: true });
  };

  getFormattedTime = time => {
    this.currentTime = time;
  };

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Stopwatch
            laps
            msecs
            start={this.state.isStopwatchStart}
            //To start
            reset={this.state.resetStopwatch}
            //To reset
            options={options}
            //options for the styling
            getTime={this.getFormattedTime}
          />
          <Button onPress={this.startStopStopWatch}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
              {!this.state.isStopwatchStart ? 'START' : 'FINISH'}
            </Text>
          </Button>
          <Button onPress={this.resetStopwatch}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>RESET</Text>
          </Button>
        </View>
        <View
          style={{
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        ></View>
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

export default App;
