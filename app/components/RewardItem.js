import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import Typography from "./Typography";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const RewardItem = ({ rewardObj, rewardClaimed, selectedIndex, user }) => {
  const { challenge, reward, winner, reward_id } = rewardObj;
  handlePress = () => {
    rewardClaimed(reward_id, user.username)
  }
  return (
    <View
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginBottom: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
      }}
    >
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        <Typography>
          Challenge: {rewardObj.challenge} km
      </Typography>
        <Typography>
          Reward: {reward}
        </Typography>
        <Typography>Winner : {winner} </Typography>
      </View>
      {selectedIndex === 0 && user.cumulative_distance > challenge && <Button title="CLAIM" onPress={handlePress} />}
    </View>
  );
};

export default RewardItem;