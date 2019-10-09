import React from "react";
import { View } from "react-native";
import Typography from "./Typography";

const OwnRunInfo = ({ averageSpeed, totalTime, totalDistance }) => {
  // console.log(averageSpeed, totalTime, totalDistance, run)
  return (
    <View
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginBottom: 16
      }}
    >
      <Typography>
        <Typography fontWeight={400} color="secondary">
          Distance : {totalDistance} km
        </Typography>
        <Typography fontWeight={400} color="secondary">
          Time: {totalTime} hrs mts
        </Typography>
        <Typography fontWeight={400} color="secondary">
          Average Speed: {averageSpeed}
        </Typography>
      </Typography>
    </View>
  );
};

export default OwnRunInfo;
