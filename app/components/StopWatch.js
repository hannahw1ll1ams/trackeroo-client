import React, { useState } from "react";
import { Stopwatch } from "react-native-stopwatch-timer";
import { View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import Typography from "./Typography";

const StopWatch = ({ isRunning, shouldResetStopWatch, onReset }) => {
  console.log(shouldResetStopWatch, "<- reset");
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-end"
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#121212",
          alignItems: "flex-end",
          paddingRight: 20
        }}
        disabled={isRunning}
        onPress={onReset}
      >
        <Typography fontSize={12} color="error">
          RESET
        </Typography>
      </TouchableOpacity>
      <Stopwatch
        start={isRunning}
        options={options}
        reset={shouldResetStopWatch}
      />
    </View>
  );
};

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
export default StopWatch;
