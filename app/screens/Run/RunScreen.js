import React, { useState } from "react";
import { View, Button } from "react-native";
import Typography from "../../components/Typography";
import * as api from "../../api";
import AlternativeMap from '../../components/AlternativeMap'
import AlternativeStopWatch from '../../components/AlternativeStopWatch'
import styles from '../MapView/SharedStyles'

const RunScreen = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    //make request here
  };

  updateActivityStatus = (boolean, time) => {
    console.log(time)
    setIsRunning(boolean)
  }

  return (
    <View>
      <Typography>Hello</Typography>
      <AlternativeMap isRunning={isRunning} />
      <AlternativeStopWatch style={styles.stopwatch} updateActivityStatus={updateActivityStatus} />
    </View>
  );
};

export default RunScreen;
