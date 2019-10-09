import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import Typography from "./Typography";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const RunItem = ({ run }) => {
  const { username, start_time, end_time, run_id } = run;
  return (
    <View
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginBottom: 16,
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid"
      }}
    >
      <Typography>
        {`${username} `}
        <Typography fontWeight={400} color="secondary">
          {end_time ? "completed a run" : "started a run"}
        </Typography>
      </Typography>
      <Typography color="secondary">
        {end_time
          ? timeAgo.format(new Date(end_time))
          : timeAgo.format(new Date(start_time))}
      </Typography>
    </View>
  );
};

export default RunItem;
