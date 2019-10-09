import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";
import styles from "../screens/MapView/SharedStyles";
import moment from "moment";

class AlternativeStopWatch extends Component {
  state = {
    isStopwatchStart: false,
    timerDuration: 90000,
    resetStopwatch: false,
    startTime: 0,
    isRunning: false,
    resetPressed: true

  };


  startWatch = async () => {
    const { updateActivityStatus, onStart, onResetPress } = this.props;
    const startTime = new Date().getTime();

    this.setState(
      {
        resetStopwatch: false,
        isRunning: true,
        startTime,
        resetPressed: false
      },
      () => {
        updateActivityStatus(this.state.isRunning, this.state.startTime);
        onResetPress(this.state.resetStopwatch)

      }
    );
    // await onStart();
  };

  stopStopWatch = () => {
    const { updateActivityStatus } = this.props;
    const { startTime } = this.state;
    const endTime = new Date().getTime();
    // console.log(startTime, endTime);
    // const totalTime = endTime - startTime;
    // console.log(totalTime);
    this.setState(
      {
        resetStopwatch: false,
        isRunning: false
      },
      () => {
        updateActivityStatus(this.state.isRunning, endTime);
      }
    );
  };

  resetStopwatch = () => {
    const { onResetPress } = this.props;
    this.setState({ isStopwatchStart: false, resetStopwatch: true, resetPressed: true }, () => {
      onResetPress(this.state.resetStopwatch)
    });
  };

  getFormattedTime = time => {
    // console.log(time)
    this.currentTime = time;
  };

  render() {
    const { isRunning, resetPressed } = this.state;
    return (
      <View style={styles.stopwatch}>
        <Stopwatch
          laps
          msecs
          start={this.state.isRunning}
          //To start
          reset={this.state.resetStopwatch}
          //To reset
          options={options}
          // //options for the styling
          getTime={this.getFormattedTime}
        />
        {isRunning === false && <Button title='START RUN' onPress={this.startWatch} disabled={resetPressed === false} />}
        {isRunning && <Button title='FINISH RUN' onPress={this.stopStopWatch} />}
        <Button disabled={isRunning} title='RESET' onPress={this.resetStopwatch} />
      </View>
    );
  }
}

const options = {
  container: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center"
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7
  }
};

export default AlternativeStopWatch;
