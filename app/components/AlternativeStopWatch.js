import React, { Component } from "react";
import { Text, View, Button, Dimensions } from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";
import styles from "../screens/MapView/SharedStyles";

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
    const { updateActivityStatus, onResetPress } = this.props;
    const startTime = new Date().getTime();

    this.setState(
      {
        resetStopwatch: false,
        isRunning: true,
        startTime,
        resetPressed: false
      },
      async () => {
        await updateActivityStatus(this.state.isRunning, this.state.startTime);
        onResetPress(this.state.resetStopwatch);
      }
    );
    // await onStart();
  };

  stopStopWatch = () => {
    const { updateActivityStatus } = this.props;
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
    this.setState(
      { isStopwatchStart: false, resetStopwatch: true, resetPressed: true },
      () => {
        onResetPress(this.state.resetStopwatch);
      }
    );
  };

  getFormattedTime = time => {
    // console.log(time)
    this.currentTime = time;
  };

  render() {
    const { isRunning, resetPressed } = this.state;
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end"
        }}
      >
        <Stopwatch
          laps
          start={this.state.isRunning}
          //To start
          reset={this.state.resetStopwatch}
          //To reset
          options={options}
          // //options for the styling
          getTime={this.getFormattedTime}
        />
        <View style={{ position: "absolute", bottom: 0 }}>
          {isRunning === false && (
            <Button
              title="START RUN"
              onPress={this.startWatch}
              disabled={resetPressed === false}
            />
          )}
        </View>
        {isRunning && (
          <Button title="FINISH RUN" onPress={this.stopStopWatch} />
        )}
        <Button
          disabled={isRunning}
          title="RESET"
          onPress={this.resetStopwatch}
        />
      </View>
    );
  }
}

const options = {
  container: {
    backgroundColor: "#121212",
    alignItems: "flex-end",
    paddingRight: 20
  },
  text: {
    fontSize: 30,
    color: "#FFF"
  }
};

export default AlternativeStopWatch;
