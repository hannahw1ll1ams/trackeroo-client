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
  const { user } = useContext(UserContext);
  const handleStartRun = async () => {
    //make request here
    try {
      const run = await api.startRun(user.username, Date.now());
      console.log(run);
    } catch (err) {
      console.log(err);
    }
  };

  updateActivityStatus = (boolean, time) => {
    console.log(time);
    setIsRunning(boolean);
  };

  collectFinalRunData = (averageSpeed, distanceTravelled) => {
    this.handleRun(averageSpeed, distanceTravelled);
  };

  return (
    <View>
      <Typography>Start a run?</Typography>

      <AlternativeMap
        isRunning={isRunning}
        collectFinalRunData={collectFinalRunData}
      />
      <AlternativeStopWatch
        onStart={handleStartRun}
        style={styles.stopwatch}
        updateActivityStatus={updateActivityStatus}
      />
    </View>
  );
};

export default RunScreen;
