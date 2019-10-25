import React from "react";
import { View } from "react-native";
import Typography from "./Typography";
const SingleRunInfo = ({ averageSpeed, totalTime, totalDistance }) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginBottom: 16,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Typography fontWeight={400} color="secondary">
        Distance : {totalDistance} km
      </Typography>
      <Typography fontWeight={400} color="secondary">
        Time: {totalTime} hrs mts
      </Typography>
      <Typography fontWeight={400} color="secondary">
        Average Speed: {averageSpeed}
      </Typography>
    </View>
  );
};
export default SingleRunInfo;
