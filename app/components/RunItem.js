import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import Typography from "./Typography";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const RunItem = ({ run, navigate }) => {
  const { username, start_time, finish_time, run_id } = run;
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
          {finish_time ? "completed a run" : "started a run"}
        </Typography>
      </Typography>
      <Typography color="secondary">
        {finish_time
          ? timeAgo.format(new Date(+finish_time))
          : timeAgo.format(new Date(+start_time))}
      </Typography>

      <TouchableOpacity
        onPress={() => {
          navigate("SingleRunnersMap", { run_id });
        }}
        style={{
          backgroundColor: "#121212",
          width: 100,
          alignSelf: "flex-end",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: 5
          // paddingRight: 20
        }}
      >
        <Typography fontSize={14} color="accent">
          Go Live
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default RunItem;
