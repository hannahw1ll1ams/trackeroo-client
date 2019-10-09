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
    isRunning: false
  };

  // startStopStopWatch = () => {

  //   const { updateActivityStatus } = this.props;

  //   this.setState({
  //     isStopwatchStart: !this.state.isStopwatchStart,
  //     resetStopwatch: false
  //   },
  //     () => {
  //       updateActivityStatus(this.state.isRunning)
  //     }
  //   );
  // }

  startWatch = async () => {
    const { updateActivityStatus, onStart } = this.props;
    const startTime = new Date().getTime();

    this.setState(
      {
        resetStopwatch: false,
        isRunning: true,
        startTime
      },
      () => {
        updateActivityStatus(this.state.isRunning, this.state.startTime);
      }
    );
    await onStart();
  };

  stopStopWatch = () => {
    const { updateActivityStatus } = this.props;
    const { startTime } = this.state;
    const endTime = new Date().getTime();
    // console.log(startTime, endTime);
    const totalTime = endTime - startTime;
    // console.log(totalTime);
    this.setState(
      {
        resetStopwatch: false,
        isRunning: false
      },
      () => {
        updateActivityStatus(this.state.isRunning, totalTime);
      }
    );
  };

  resetStopwatch = () => {
    this.setState({ isStopwatchStart: false, resetStopwatch: true });
  };

  getFormattedTime = time => {
    // console.log(time)
    this.currentTime = time;
  };

  render() {
    const { isRunning } = this.state;
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
        {isRunning === false && (
          <Button title="START RUN" onPress={this.startWatch} />
        )}
        {isRunning && (
          <Button title="FINISH RUN" onPress={this.stopStopWatch} />
        )}
        <Button title="RESET" onPress={this.resetStopwatch} />
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
