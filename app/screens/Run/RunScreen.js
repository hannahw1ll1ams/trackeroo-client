import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
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
  const [resetRun, setResetRun] = useState(false);
  const [run, setRun] = useState({});
  const [runToUpdate, setRunToUpdate] = useState(false);
  const [shouldResetStopWatch, setShouldResetStopWatch] = useState(false);
  const { user } = useContext(UserContext);


  const handleStartRun = async () => {
    //make request here
    try {
      const startTime = Date.now().toString();
      console.log("type", typeof startTime);
      console.log(startTime);
      const run = await api.startRun(user.username, startTime);
      console.log("run that came back", run);
      setRun(run);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateRun = async stats => {
    try {
      if (run.run_id) {
        await api.updateRun({
          ...stats,
          run_id: run.run_id,
          username: user.username
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEndRun = async (
    averageSpeed,
    distanceTravelled,
    stringedCoords
  ) => {
    //patch request with rest of run data and username?
    const finish_time = Date.now().toString();
    const updatedRun = {
      // latitude: location.coords.latitude,
      // longitude: location.coords.longitude,
      finish_time,
      average_speed: averageSpeed,
      total_distance: distanceTravelled,
      coordinates: stringedCoords,
      username: user.username,
      run_id: run.run_id
    };
    await api.endRun(updatedRun);
    //send this to server
  };

  const updateActivityStatus = async (boolean, time) => {
    setIsRunning(boolean);
    if (boolean === true) {
      await handleStartRun(time);
    } else {
      setEndTime(Date.now());
    }
  };

  const collectFinalRunData = async (
    averageSpeed,
    distanceTravelled,
    stringedCoords
  ) => {
    await handleEndRun(averageSpeed, distanceTravelled, stringedCoords);
  };

  const onResetPress = boolean => {
    console.log(boolean, "<--- reset watch?");
    setResetRun(boolean);
  };

  const toggleRun = async () => {
    if (!isRunning) {
      await handleStartRun();
    } else {
      setShouldResetStopWatch(false);
    }
    setIsRunning(!isRunning);
  };

  return (
    <View>
      <AlternativeMap
        isRunning={isRunning}
        collectFinalRunData={collectFinalRunData}
        resetRun={resetRun}
        onReset={() => setShouldResetStopWatch(true)}
        onResetPress={onResetPress}
        onUpdateRun={handleUpdateRun}
        shouldResetStopWatch={shouldResetStopWatch}
      />
      <View style={{ position: "absolute", bottom: 50, right: 20 }}>
        <Button
          raised
          onPress={toggleRun}
          title={isRunning ? "Stop" : "Start"}
          textStyle={{
            color: isRunning ? "#ce93d8" : "#FFFFFF"
          }}
          buttonStyle={{
            backgroundColor: isRunning ? "#ff8c00" : "#ce93d8",
            width: 70,
            height: 70,
            borderRadius: 35
          }}
        />
      </View>
    </View>
  );
};

export default RunScreen;
