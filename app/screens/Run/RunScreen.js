import React, { useState } from "react";
import { View, Button } from "react-native";
import Typography from "../../components/Typography";
import * as api from "../../api";

const RunScreen = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    //make request here
  };

  return (
    <View>
      <Typography>Hello</Typography>
      <Button
        title={isRunning ? "Stop" : "Start"}
        onPress={() => setIsRunning(!isRunning)}
      />
    </View>
  );
};

export default RunScreen;
