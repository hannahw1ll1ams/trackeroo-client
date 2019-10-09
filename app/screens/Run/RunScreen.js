import React, { useState, useContext, useEffect } from "react";
import { View, Button } from "react-native";
import Typography from "../../components/Typography";
import * as api from "../../api";
import AlternativeMap from "../../components/AlternativeMap";
import AlternativeStopWatch from "../../components/AlternativeStopWatch";
import styles from "../MapView/SharedStyles";
import UserContext from "../../context/UserContext";

const RunScreen = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [endTime, setEndTime] = useState(null);
  const [startTime, setStartTime] = useState(null)
  const [completedRun, setCompletedRun] = useState(false);
  const [resetRun, setResetRun] = useState(false)

  const { user } = useContext(UserContext);

  const handleStartRun = async (startingTime) => {
    //make request here
    console.log(startTime, '<---starting time')
    try {
      const run = await api.startRun(user.username, Date.now());
      console.log(run);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEndRun = (averageSpeed, distanceTravelled, stringedCoords) => {
    //patch request with rest of run data and username?

    console.log(endTime, '<----totalTime')
    console.log(averageSpeed, '<----averageSpeed')
    console.log(distanceTravelled, '<----totalDistance')
    console.log(stringedCoords, '<----runObject')
  };

  const updateActivityStatus = (boolean, time) => {
    setIsRunning(boolean)
    if (boolean === true) {
      handleStartedRun(time)
    }
    else {
      setEndTime(time)
    }
  }

  const collectFinalRunData = (averageSpeed, distanceTravelled, stringedCoords) => {
    handleEndRun(averageSpeed, distanceTravelled, stringedCoords)
  }

  const onResetPress = (boolean) => {
    console.log(boolean, "<--- reset watch?")
    setResetRun(boolean)
  }

  return (
    <View>
      <Typography>Start a run?</Typography>
      <AlternativeMap isRunning={isRunning}
        collectFinalRunData={collectFinalRunData} resetRun={resetRun} />
      <AlternativeStopWatch style={styles.stopwatch} updateActivityStatus={updateActivityStatus} onResetPress={onResetPress} />
    </View>
  );
};

export default RunScreen;
