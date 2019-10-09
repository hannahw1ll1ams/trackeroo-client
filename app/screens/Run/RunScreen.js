import React, { useState, useContext, useEffect } from "react";
import { View, Button } from "react-native";
import Typography from "../../components/Typography";
import * as api from "../../api";
import AlternativeMap from "../../components/AlternativeMap";
import AlternativeStopWatch from "../../components/AlternativeStopWatch";
import styles from "../MapView/SharedStyles";
import UserContext from "../../context/UserContext";

const RunScreen = () => {
  //whether running
  //
  const [isRunning, setIsRunning] = useState(false);
  const [endTime, setEndTime] = useState(null);
  const [completedRun, setCompletedRun] = useState(false);
  const [resetRun, setResetRun] = useState(false)
  const [run_id, setRun_id] = useState("")

  const { user } = useContext(UserContext);

  const handleStartRun = async () => {
    try {
      const run = await api.startRun(user.username, Date.now());
      //does this work???, how do you get in async back this value?
      setRun_id(run.run_id)
      console.log(run);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEndRun = (averageSpeed, distanceTravelled, stringedCoords) => {
    api.endRun("hannah", run_id).catch(error => console.log('ERROR'))
    api.updateDistanceTotal("hannah", distanceTravelled).catch(error => console.log('ERROR'))
    console.log(endTime, '<----totalTime')
    console.log(averageSpeed, '<----averageSpeed')
    console.log(distanceTravelled, '<----totalDistance')
    //send this to server
    console.log(stringedCoords, '<----runObject')
  };

  const updateActivityStatus = (boolean, time) => {
    setIsRunning(boolean)
    if (boolean === true) {
      handleStartRun(time)
    }
    else {
      setEndTime(Date.now())
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
